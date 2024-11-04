FROM node:18-alpine as base
WORKDIR /usr/src/app
COPY package*.json .

FROM base as dev
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM dev as builder
RUN npm run build

FROM nginx:1.27.0-alpine as prod
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
