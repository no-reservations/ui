FROM node:10.13-alpine as dev
WORKDIR /root/
CMD yarn install \
    && yarn start

FROM node:10.13-alpine as build
WORKDIR /root
COPY ./package.json ./package.json
RUN npm install
COPY . . 
RUN npm run build -o app

# multistage build...
# this runs a lil nginx instance to serve the app
FROM nginx:alpine as prod
EXPOSE 3000
COPY --from=build /root/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf