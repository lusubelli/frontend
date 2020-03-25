FROM node:13.3.0 AS build

RUN npm install -g yarn

COPY .npmrc package.json yarn.lock ./
RUN yarn install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN ng build --prod

FROM nginx

EXPOSE 80

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build dist/frontend /usr/share/nginx/html
