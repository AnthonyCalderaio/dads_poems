# syntax=docker/dockerfile:1
FROM node:12.18.1
RUN npm install --production
WORKDIR /app
COPY . .
CMD ["node", "src/index.js"]
EXPOSE 4000