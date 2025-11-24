FROM node:22-alpine AS base

RUN apk update && apk add su-exec tini jq

# Prepare app dir
WORKDIR /app
RUN chown node:node .
RUN npm install -g corepack@latest

USER node

ENV MY_BIN_DIR=/home/node/bin
RUN mkdir -p $MY_BIN_DIR
ENV PATH=$PATH:$MY_BIN_DIR

RUN corepack enable --install-directory $MY_BIN_DIR pnpm \
  && corepack install -g pnpm@latest-10

# Fetch packages
COPY --chown=node:node pnpm-lock.yaml ./
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch;
RUN pnpm fetch;

# Install packages
COPY --chown=node:node package.json ./
RUN corepack install
RUN pnpm install --offline --frozen-lockfile;


# Copy source code
COPY --chown=node:node . .

# Version
RUN jq .version package.json -r > ./public/version.txt

# ===========
# Development
# ===========
FROM base AS development
# Dev runtime config
USER node
EXPOSE 8080
ENV PORT=8080
ENV HOST=0.0.0.0
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["pnpm", "run", "dev"]

# Build
# =====
FROM base AS build
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store NODE_ENV=production pnpm run build
RUN NODE_ENV=production pnpm run build

# ===========
# Prod image
# ===========
FROM nginx:alpine AS production

# Prepare app dir
WORKDIR /usr/share/nginx/html

# Copy runtime data
COPY docker-entrypoint /docker-entrypoint
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist ./
RUN mv ./index.html ./index.html.template

EXPOSE 8080
# Runtime config
ENTRYPOINT ["/docker-entrypoint"]
CMD ["nginx", "-g", "daemon off;"]
