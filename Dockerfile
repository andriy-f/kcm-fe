FROM node:20-alpine as base

RUN apk add --no-cache su-exec tini

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# Prepare app dir
WORKDIR /app
RUN chown node:node .

# Restore packages
RUN apk add --no-cache --virtual .gyp python3 make g++
COPY --chown=node:node package.json package-lock.json ./
ENV NODE_ENV development
RUN set -ex; \
  su-exec node npm ci; \
  su-exec node npm cache clean --force; \
  apk del .gyp;

COPY --chown=node:node tsconfig.json tsconfig.node.json nodemon-relay.json ./
COPY --chown=node:node vite.config.ts myRelayPlugin.ts .eslintrc.cjs ./
COPY --chown=node:node relay.config.json schema.graphql index.html ./
COPY --chown=node:node assets ./assets
COPY --chown=node:node public ./public
COPY --chown=node:node scripts ./scripts
COPY --chown=node:node src ./src

# Development
# ===========
FROM base as development
# Dev runtime config
USER node
EXPOSE 80
ENV PORT 80
ENV HOST 0.0.0.0
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "run", "dev"]

# Unit tests
# =====
FROM base as test
RUN su-exec node env \
  REACT_APP_KCM_BACKEND_URL=http://localhost:3000 \
  NODE_ENV=test \
  CI=true \
  npm run test

# Build
# =====
FROM base as build
RUN su-exec node env NODE_ENV=production npm run build

# ==========
# Prod image
# ==========
FROM nginx:alpine as production

# Prepare app dir
WORKDIR /usr/share/nginx/html

# Copy runtime data
COPY docker-entrypoint /docker-entrypoint
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist ./
RUN mv ./index.html ./index.html.template

# Runtime config
ENTRYPOINT ["/docker-entrypoint"]
CMD ["nginx", "-g", "daemon off;"]
