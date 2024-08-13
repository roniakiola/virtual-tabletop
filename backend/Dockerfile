FROM node:20.15.1-bookworm-slim as base
WORKDIR /usr/src/app
COPY --chown=node:node package*.json .

FROM base as dev
RUN npm install
COPY --chown=node:node . ./
EXPOSE 3001
CMD [ "npm", "run", "dev" ]

FROM dev as builder
RUN npm run build

FROM base as prod
RUN npm ci --omit=dev
COPY --from=builder --chown=node:node /usr/src/app/dist ./dist
USER node
EXPOSE 3001
CMD [ "node", "dist/index.js" ]
