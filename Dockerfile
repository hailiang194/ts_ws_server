FROM node:18

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./src/ /app/src
COPY tsconfig.json /app/

RUN npm run build

EXPOSE 8080
ENTRYPOINT npm run start:prod