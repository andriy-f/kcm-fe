# Dev image
FROM node:10-alpine as build

RUN apk add --no-cache su-exec tini

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# Prepare app dir
WORKDIR /app
RUN chown node:node .

# Restore packages
COPY --chown=node:node package.json package-lock.json ./

ENV NODE_ENV development
RUN set -ex; \
  apk add --no-cache --virtual .gyp python make g++; \
  su-exec node npm ci; \
  su-exec node npm cache clean --force; \
  apk del .gyp;

# Build app
COPY --chown=node:node .eslintrc.json ./
COPY --chown=node:node flow-typed ./flow-typed
COPY --chown=node:node config ./config
COPY --chown=node:node public ./public
COPY --chown=node:node server ./server
COPY --chown=node:node scripts ./scripts
COPY --chown=node:node src ./src
RUN su-exec node env NODE_ENV=production npm run build

# Dev runtime config
USER node
EXPOSE 8080
ENV PORT 8080
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "scripts/watch.js"]

# ==========
# Prod image
# ==========
FROM nginx:alpine

# Prepare app dir
WORKDIR /usr/share/nginx/html

# Copy runtime data
COPY docker-entrypoint /docker-entrypoint
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build ./
RUN mv ./index.html ./index.html.template

# Runtime config
ENTRYPOINT ["/docker-entrypoint"]
CMD ["nginx", "-g", "daemon off;"]
