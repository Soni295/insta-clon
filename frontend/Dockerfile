FROM node:12-alpine3.12
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
