FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration production

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/masteremployee-web/browser /usr/share/nginx/html
EXPOSE 80 443
CMD ["/bin/sh", "-c", "while :; do sleep 6h & wait $${!}; nginx -s reload; done & nginx -g 'daemon off;'"]
