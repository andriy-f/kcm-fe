FROM node:22-alpine AS base

RUN apk add --no-cache su-exec tini

# Prepare app dir
WORKDIR /app
RUN chown node:node .

USER node

ENV MY_BIN_DIR=/home/node/bin
RUN mkdir -p $MY_BIN_DIR
ENV PATH=$PATH:$MY_BIN_DIR

RUN corepack enable --install-directory $MY_BIN_DIR pnpm
RUN corepack install -g pnpm@latest-10

# Restore packages
COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store NODE_ENV=development pnpm install --frozen-lockfile;

# Copy source code
COPY --chown=node:node . .

# Development
# ===========
FROM base AS development
# Dev runtime config
USER node
EXPOSE 80
ENV PORT=80
ENV HOST=0.0.0.0
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["pnpm", "run", "dev"]

# Build
# =====
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store NODE_ENV=production pnpm run build

# ==========
# Prod image
# ==========
FROM nginx:alpine AS production

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
