FROM node:12.14-alpine3.11

WORKDIR /home/survey
COPY . .
RUN npm i
RUN npm install --global http-server
