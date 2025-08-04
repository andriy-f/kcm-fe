# K Contact Manager

## Environment variables

* `PORT` - port, on which to run app.
* `VITE_KCM_BACKEND_URL` - URL of backend with supported API.

## Development

To enable debug output in browser console, enter `localStorage.debug='kcm-fe:*'`

Running tests via docker: just `./scripts/test`
Running tests via podman: `env PODMAN_COMPOSE_PROVIDER=podman-compose CONTAINER_ENGINE=podman ./scripts/test`