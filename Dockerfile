FROM nginx as production-stage

RUN mkdir /app

WORKDIR /lab

COPY . /lab

COPY nginx.conf /etc/nginx/nginx.conf
