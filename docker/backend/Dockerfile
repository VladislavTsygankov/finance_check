FROM node:18
WORKDIR /app
COPY ./packages/backend/package.json /app/
RUN npm install
COPY ./packages/backend/ /app/
RUN npm run build
EXPOSE 8000
CMD [ "npm", "run", "prod" ]
