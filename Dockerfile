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
FROM node:10-alpine

RUN apk add --no-cache su-exec

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# Install pm2
RUN set -ex; \
  su-exec node npm install pm2 -g; \
  su-exec node npm cache clean --force;

# Prepare app dir
ARG wd=/app
WORKDIR $wd
RUN chown node:node .

# Restore packages
COPY --chown=node:node package.json package-lock.json ./
ENV NODE_ENV production
RUN set -ex; \
  apk add --no-cache --virtual .gyp python make g++; \
  su-exec node npm ci; \
  su-exec node npm cache clean --force; \
  apk del .gyp;

# Copy runtime data
COPY --chown=node:node config ./config
COPY --chown=node:node public ./public
COPY --chown=node:node server ./server
COPY --chown=node:node scripts ./scripts
COPY --chown=node:node --from=build $wd/build ./build

# Runtime config
USER node
EXPOSE 8080
ENV PORT 8080
CMD ["pm2-runtime", "server/index.js"]
