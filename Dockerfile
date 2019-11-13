# node build environment
FROM node:12.2.0-alpine as build

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# nginx production environment
FROM nginx:1.16.0-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /home/app/build .

EXPOSE 80


