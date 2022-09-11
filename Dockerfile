# syntax=docker/dockerfile:1
FROM node:14.17.3
RUN npm install --production
RUN --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# WORKDIR /app
COPY . .
CMD ["node", "src/index.js"]
EXPOSE 4000