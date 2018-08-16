FROM node:8.11.3 as builder
COPY . /app
WORKDIR /app
RUN yarn
RUN yarn build

FROM node:8.11.3
COPY --from=builder /app /app
EXPOSE 80
WORKDIR /app
ENV PORT 80
CMD ["yarn", "start:prod:universal"]
