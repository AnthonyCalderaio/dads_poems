# syntax=docker/dockerfile:1
FROM node:14.17.3
RUN npm install --production


# WORKDIR /app
COPY . .
CMD ["node", "src/index.js"]
EXPOSE 4000

