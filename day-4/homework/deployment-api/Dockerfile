FROM node:20-alpine as build

WORKDIR /app
COPY /api/ .
RUN yarn 
RUN yarn build

FROM node:20-alpine as prod

WORKDIR /app
COPY --from=build /app/dist/ ./dist/
COPY --from=build /app/package.json .
RUN yarn --frozen-lockfile --production
EXPOSE 3000

CMD [ "yarn", "start" ]

