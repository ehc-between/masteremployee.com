#!/usr/bin/env bash
# First-time Let's Encrypt certificate acquisition for masteremployee.com.
#
# Run once on a fresh EC2 host, after DNS for both names points at the instance
# and ports 80/443 are open in the security group.
#
# Usage:
#   ./init-letsencrypt.sh            # production certificate
#   STAGING=1 ./init-letsencrypt.sh  # staging (no rate limits, untrusted cert)
#
# nginx no longer needs a certificate in order to start, so there is no dummy
# certificate step: we bring the site up on HTTP, let certbot validate over the
# webroot, and the container switches itself to HTTPS once the cert exists.

set -euo pipefail

cd "$(dirname "$0")"

if ! docker compose version >/dev/null 2>&1; then
  echo "Error: 'docker compose' is required." >&2
  exit 1
fi

domains=(masteremployee.com www.masteremployee.com)
primary_domain="${domains[0]}"
email="edward@masteremployee.com"
rsa_key_size=4096
data_path="./certbot"
staging="${STAGING:-0}"

if [ -d "$data_path/conf/live/$primary_domain" ]; then
  read -r -p "Existing certificate data found for $primary_domain. Replace it? (y/N) " decision
  if [ "$decision" != "y" ] && [ "$decision" != "Y" ]; then
    echo "Leaving the existing certificate in place."
    exit 0
  fi
fi

mkdir -p "$data_path/conf" "$data_path/www"

# Build with `docker build` rather than `docker compose build`. Compose v2 routes
# builds through buildx and hard-fails with "compose build requires buildx 0.17.0
# or later" on stock Amazon Linux 2023, whose docker package ships without a
# current buildx plugin. Plain `docker build` works with or without buildx.
echo "### Building the image ..."
docker build -t masteremployee-web:latest .

echo "### Starting nginx (HTTP only) ..."
docker compose up -d --force-recreate --no-build web

echo "### Waiting for the ACME challenge path to answer ..."
for _ in $(seq 1 30); do
  if curl -fsS -o /dev/null "http://localhost/healthz"; then
    break
  fi
  sleep 2
done
if ! curl -fsS -o /dev/null "http://localhost/healthz"; then
  echo "Error: nginx did not come up. Check: docker compose logs web" >&2
  exit 1
fi

domain_args=()
for domain in "${domains[@]}"; do
  domain_args+=(-d "$domain")
done

staging_arg=()
if [ "$staging" != "0" ]; then
  staging_arg=(--staging)
fi

echo "### Requesting a certificate for ${domains[*]} ..."
docker compose run --rm --entrypoint certbot certbot \
  certonly --webroot -w /var/www/certbot \
  "${staging_arg[@]}" \
  --email "$email" \
  "${domain_args[@]}" \
  --rsa-key-size "$rsa_key_size" \
  --agree-tos \
  --no-eff-email \
  --non-interactive

echo "### Waiting for nginx to switch itself to HTTPS ..."
for _ in $(seq 1 30); do
  if curl -fsSk -o /dev/null "https://localhost/healthz"; then
    break
  fi
  sleep 2
done

echo "### Starting the renewal loop ..."
docker compose up -d certbot

echo
echo "### Done. https://$primary_domain should now be live."
echo "    Verify with: curl -sSI https://$primary_domain | head -1"
