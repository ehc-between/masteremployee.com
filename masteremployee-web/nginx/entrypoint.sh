#!/bin/sh
# Boots nginx in whichever state the host is actually in.
#
# The old config unconditionally referenced files that only exist after certbot
# has run, so a fresh host crash-looped with:
#   open() "/etc/letsencrypt/options-ssl-nginx.conf" failed (2: No such file or directory)
#
# Here nginx always starts. With no certificate it serves HTTP only (and the ACME
# challenge path); once a certificate lands it swaps in the TLS config and reloads.

set -eu

DOMAIN="${CERT_DOMAIN:-masteremployee.com}"
CERT_DIR="/etc/letsencrypt/live/${DOMAIN}"
ACTIVE="/etc/nginx/conf.d/default.conf"
TEMPLATES="/etc/nginx/available"
POLL_INTERVAL="${TLS_POLL_INTERVAL:-60}"
RELOAD_INTERVAL="${NGINX_RELOAD_INTERVAL:-21600}"   # 6h, to pick up renewed certs

log() { echo "[entrypoint] $*"; }

certs_present() {
    [ -s "${CERT_DIR}/fullchain.pem" ] &&
    [ -s "${CERT_DIR}/privkey.pem" ] &&
    [ -s "${CERT_DIR}/chain.pem" ]
}

desired_template() {
    if certs_present; then
        echo "${TEMPLATES}/tls.conf"
    else
        echo "${TEMPLATES}/http-only.conf"
    fi
}

# Installs the desired template if it differs from what is live.
# Returns 0 when the active config changed, 1 when it was already correct.
sync_config() {
    want="$(desired_template)"
    if [ -f "$ACTIVE" ] && cmp -s "$want" "$ACTIVE"; then
        return 1
    fi
    cp "$want" "$ACTIVE"
    log "activated $(basename "$want")"
    return 0
}

sync_config || true
if ! certs_present; then
    log "no certificate at ${CERT_DIR} yet - serving HTTP only."
    log "run ./init-letsencrypt.sh on the host to issue one; TLS turns on automatically."
fi

# Never let a bad certificate take the site down entirely: if the TLS config
# fails validation, fall back to serving HTTP.
if ! nginx -t 2>/dev/null; then
    log "ERROR: active config failed validation:"
    nginx -t || true
    if certs_present; then
        log "falling back to HTTP-only so the site stays reachable"
        cp "${TEMPLATES}/http-only.conf" "$ACTIVE"
        nginx -t
    else
        exit 1
    fi
fi

nginx -g 'daemon off;' &
nginx_pid=$!

# Shut nginx down cleanly on container stop.
trap 'log "stopping"; nginx -s quit 2>/dev/null || kill "$nginx_pid" 2>/dev/null; exit 0' TERM INT

elapsed=0
while kill -0 "$nginx_pid" 2>/dev/null; do
    sleep "$POLL_INTERVAL" &
    wait "$!" || true
    elapsed=$((elapsed + POLL_INTERVAL))

    changed=0
    sync_config && changed=1

    if [ "$changed" -eq 1 ]; then
        if nginx -t 2>/dev/null; then
            log "config changed - reloading"
            nginx -s reload
        else
            log "ERROR: new config failed validation, keeping the running one"
            nginx -t || true
        fi
    elif [ "$elapsed" -ge "$RELOAD_INTERVAL" ]; then
        log "periodic reload (picks up renewed certificates)"
        nginx -s reload
        elapsed=0
    fi
done

wait "$nginx_pid"
