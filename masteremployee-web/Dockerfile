FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration production

FROM nginx:1.27-alpine

# Config templates the entrypoint chooses between at runtime, plus the snippets
# they include. Nothing here depends on files produced by certbot, so the image
# boots on a host that has never run the Let's Encrypt bootstrap.
COPY nginx/http-only.conf nginx/tls.conf /etc/nginx/available/
COPY nginx/site.conf nginx/common.conf nginx/ssl-options.conf /etc/nginx/snippets/
COPY nginx/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh && rm -f /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/masteremployee-web/browser /usr/share/nginx/html

EXPOSE 80 443

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -q --spider http://127.0.0.1/healthz || exit 1

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
