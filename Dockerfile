ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-alpine
WORKDIR .
COPY package.json .
RUN npm install
COPY . .
CMD node app.js
