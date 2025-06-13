FROM node:22.16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY dist ./
EXPOSE 3000
CMD [ "node", "main.js" ]