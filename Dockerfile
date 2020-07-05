#base image
FROM node:lts-slim

RUN mkdir /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN yarn

CMD [ "npm", "start" ]