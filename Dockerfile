# base image
FROM nginx:1.16.0-alpine

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./dist/ . 
