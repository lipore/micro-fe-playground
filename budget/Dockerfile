FROM node:14 as builder

WORKDIR /opt/src

COPY package.json /opt/src/
COPY yarn.lock /opt/src/

RUN yarn install 

COPY public /opt/src/public
COPY src /opt/src/src

RUN yarn build

FROM nginx

COPY --from=builder /opt/src/build /usr/share/nginx/html

RUN for file in `ls /usr/share/nginx/html/static/js/*.js`; do echo $file;printf '\n' >> $file; done && \
    cat /usr/share/nginx/html/static/js/runtime-main.*.js > /usr/share/nginx/html/static/js/bundle.js && \
    cat /usr/share/nginx/html/static/js/*.chunk.js >> /usr/share/nginx/html/static/js/bundle.js
