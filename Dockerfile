FROM node:16-alphine

WORKDIR /app

COPY pakage*.json ./


COPY ./src src
COPY ./README.md .
COPY ./public public