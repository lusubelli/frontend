# base image
FROM nginx:1.16.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./dist/frontend /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
