# Dev image
FROM node:10 as build

# Restore packages
WORKDIR /app
COPY package.json package-lock.json ./
ENV NODE_ENV development
RUN set -ex; \
  npm ci; \
  npm cache clean --force;

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
FROM node:10

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
  npm ci; \
  npm cache clean --force;

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
