# MasteremployeeWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Deployment (EC2 + Docker Compose + Let's Encrypt)

The site is served by nginx from a multi-stage image that builds the Angular app
and serves the static output. TLS certificates come from Let's Encrypt via a
certbot sidecar using webroot validation.

### How the TLS handoff works

nginx **does not require a certificate in order to start**. The image ships two
config variants and an entrypoint picks between them:

| State | Active config | Behaviour |
| --- | --- | --- |
| No certificate on disk | `http-only.conf` | Serves the site on port 80 and exposes `/.well-known/acme-challenge/` |
| Certificate present | `tls.conf` | Port 80 serves ACME + redirects to HTTPS; port 443 serves the site; `www` redirects to the apex |

The entrypoint re-checks every 60s and reloads when the state changes, so TLS
switches on by itself once certbot issues a certificate. It also reloads every
6h to pick up renewals.

This is why nothing in `nginx/` references `/etc/letsencrypt/options-ssl-nginx.conf`
or `ssl-dhparams.pem` — those only exist after certbot has run, and depending on
them made a fresh host fail to boot with:

```
[emerg] open() "/etc/letsencrypt/options-ssl-nginx.conf" failed (2: No such file or directory)
```

### First deploy on a fresh host

Prerequisites: Docker with the Compose plugin, DNS A records for
`masteremployee.com` and `www.masteremployee.com` pointing at the instance, and
inbound 80/443 open in the security group.

```bash
git clone <repo> && cd masteremployee-web
./init-letsencrypt.sh          # add STAGING=1 first to rehearse without hitting rate limits
```

The script brings nginx up on HTTP, requests the certificate over the webroot,
waits for nginx to switch to HTTPS, then starts the renewal loop.

### Routine redeploys

```bash
git pull
docker compose up -d --build web
```

Certificates live in `./certbot/conf` on the host and are untouched by rebuilds.

### Renewals

The `certbot` service attempts renewal every 12h. nginx picks up the new
certificate on its next periodic reload — no hook required. To force one:

```bash
docker compose run --rm --entrypoint certbot certbot renew --force-renewal
docker compose exec web nginx -s reload
```

### Troubleshooting

```bash
docker compose logs -f web            # entrypoint decisions + nginx errors
docker compose exec web nginx -T      # dump the fully-resolved active config
curl -sS http://localhost/healthz     # liveness, answers in both states
```

If the site is stuck on HTTP, check that `certbot/conf/live/masteremployee.com/`
contains `fullchain.pem`, `privkey.pem`, and `chain.pem` — the entrypoint
requires all three before enabling TLS.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
