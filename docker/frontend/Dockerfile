FROM node:18 as build
WORKDIR /app
COPY ./packages/front/package.json /app/
RUN npm install
COPY ./packages/front/ /app/
RUN npm run build

FROM nginx:alpine
COPY ./docker/frontend/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/  /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]