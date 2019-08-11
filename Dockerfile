FROM node:10.16-jessie as builder

WORKDIR /usr/src/app

COPY . ./

RUN yarn

RUN yarn build

# Runtime image
FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY react-site.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

