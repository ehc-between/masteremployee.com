#!/usr/bin/env bash
# Bootstrap script for first-time Let's Encrypt certificate acquisition.
# Run once on a fresh EC2 host after DNS is pointed at the instance.
# Usage:
#   ./init-letsencrypt.sh           # production certs
#   STAGING=1 ./init-letsencrypt.sh # Let's Encrypt staging (no rate limits, untrusted cert)

set -euo pipefail

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
    exit 0
  fi
fi

if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  echo "### Downloading recommended TLS parameters ..."
  mkdir -p "$data_path/conf"
  curl -fsSL https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf \
    > "$data_path/conf/options-ssl-nginx.conf"
  curl -fsSL https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem \
    > "$data_path/conf/ssl-dhparams.pem"
fi

echo "### Creating dummy certificate for $primary_domain ..."
cert_path="/etc/letsencrypt/live/$primary_domain"
mkdir -p "$data_path/conf/live/$primary_domain"
mkdir -p "$data_path/www"
docker compose run --rm --entrypoint "\
  openssl req -x509 -nodes -newkey rsa:$rsa_key_size -days 1 \
    -keyout '$cert_path/privkey.pem' \
    -out '$cert_path/fullchain.pem' \
    -subj '/CN=localhost'" certbot

echo "### Starting nginx ..."
docker compose up --force-recreate -d web

echo "### Deleting dummy certificate for $primary_domain ..."
docker compose run --rm --entrypoint "\
  rm -rf /etc/letsencrypt/live/$primary_domain && \
  rm -rf /etc/letsencrypt/archive/$primary_domain && \
  rm -rf /etc/letsencrypt/renewal/$primary_domain.conf" certbot

echo "### Requesting Let's Encrypt certificate for ${domains[*]} ..."
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

email_arg="--email $email"
staging_arg=""
if [ "$staging" != "0" ]; then
  staging_arg="--staging"
fi

docker compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $email_arg \
    $domain_args \
    --rsa-key-size $rsa_key_size \
    --agree-tos \
    --no-eff-email \
    --force-renewal" certbot

echo "### Reloading nginx ..."
docker compose exec web nginx -s reload

echo "### Starting certbot renewal loop ..."
docker compose up -d certbot

echo "### Done. https://$primary_domain should now be live."
