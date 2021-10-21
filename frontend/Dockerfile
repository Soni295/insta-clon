FROM node:12-alpine3.12
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN npm i
COPY . .
CMD ["npm", "run", "start"]
