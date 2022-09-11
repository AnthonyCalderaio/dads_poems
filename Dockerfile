# syntax=docker/dockerfile:1
FROM node:8.9.1-alpine as node
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


# # WORKDIR /app
# COPY . .
# CMD ["node", "src/index.js"]
# EXPOSE 4000

