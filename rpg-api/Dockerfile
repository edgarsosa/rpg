FROM node:8.9.4-alpine

USER root

ENV HOME=/usr/app

WORKDIR $HOME

RUN mkdir node_modules

RUN chown -R node:node $HOME

USER node

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .