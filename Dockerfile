# Dev image
FROM node:8 as build

# Restore packages
WORKDIR /app
COPY package.json yarn.lock ./
RUN env NODE_ENV=development \
  yarn install --frozen-lockfile --audit \
  && yarn cache clean

# Build app
COPY .eslintrc.json .
COPY flow-typed ./flow-typed
COPY config ./config
COPY public ./public
COPY server ./server
COPY scripts ./scripts
COPY src ./src
RUN env NODE_ENV=production yarn build

# ==========
# Prod image
# ==========
FROM node:8

# Install pm2
RUN yarn global add pm2 && yarn cache clean

# App
ARG wd=/app
WORKDIR $wd
COPY config ./config
COPY public ./public
COPY server ./server
COPY scripts ./scripts
COPY --from=build $wd/build ./build
COPY --from=build $wd/buildServer ./buildServer

# Final config
ENV NODE_ENV production
EXPOSE 80
ENV PORT 80
CMD ["pm2-runtime", "server/index.js"]
