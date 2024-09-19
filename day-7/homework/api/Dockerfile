FROM node:20-alpine AS build

WORKDIR /app
COPY . .
RUN yarn 
RUN yarn build

FROM node:20-alpine AS prod

RUN apk update && apk add --no-cache curl dumb-init
WORKDIR /app
COPY --chown=node:node . /app
COPY --from=build /app/dist/ ./dist/
COPY --from=build /app/package.json .
RUN yarn --frozen-lockfile --production && yarn cache clean
EXPOSE 3000
USER node

CMD ["dumb-init", "node", "./dist/main"]

