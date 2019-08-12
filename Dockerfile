# Dev image
FROM node:10-alpine as build

# Restore packages
WORKDIR /app
COPY package.json package-lock.json ./
ENV NODE_ENV development
RUN set -ex; \
  apk add --no-cache --virtual .gyp python make g++; \
  npm ci; \
  npm cache clean --force; \
  apk del .gyp;

# Build app
COPY .eslintrc.json ./
COPY flow-typed ./flow-typed
COPY config ./config
COPY public ./public
COPY server ./server
COPY scripts ./scripts
COPY src ./src
RUN env NODE_ENV=production npm run build

# Dev cmd
EXPOSE 80
ENV PORT 80
CMD ["node", "scripts/watch.js"]

# ==========
# Prod image
# ==========
FROM node:10-alpine

# Install pm2
RUN set -ex; \
  npm install pm2 -g; \
  npm cache clean --force;

# App
ARG wd=/app
WORKDIR $wd

# Restore packages
COPY package.json package-lock.json ./
ENV NODE_ENV production
RUN set -ex; \
  apk add --no-cache --virtual .gyp python make g++; \
  npm ci; \
  npm cache clean --force; \
  apk del .gyp;

COPY config ./config
COPY public ./public
COPY server ./server
COPY scripts ./scripts
COPY --from=build $wd/build ./build
COPY --from=build $wd/buildServer ./buildServer

# Final config
EXPOSE 80
ENV PORT 80
CMD ["pm2-runtime", "server/index.js"]
