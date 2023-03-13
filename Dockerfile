# Dev image
FROM node:18-alpine as build

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

# Build app
COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node .eslintrc.json ./
COPY --chown=node:node nodemon-relay.json ./
COPY --chown=node:node relay.config.js ./
COPY --chown=node:node schema.graphql ./
COPY --chown=node:node assets ./assets
COPY --chown=node:node public ./public
COPY --chown=node:node scripts ./scripts
COPY --chown=node:node src ./src
RUN su-exec node env NODE_ENV=production npm run build

# Dev runtime config
USER node
EXPOSE 80
ENV PORT 80
STOPSIGNAL SIGINT
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "run", "dev"]

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
