# syntax=docker/dockerfile:1

FROM node:lts-hydrogen

WORKDIR /flip_and_boom_BE

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]