FROM node:18.17.0-alpine

EXPOSE 5200

WORKDIR /opt/api/src/

ADD . /opt/api/

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm run build

WORKDIR /opt/api/src/

ENTRYPOINT pnpm run start
