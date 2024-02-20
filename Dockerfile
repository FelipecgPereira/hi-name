FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000
RUN yarn build
CMD ["yarn", "start:prod"]