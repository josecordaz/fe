FROM python:alpine3.10

EXPOSE 8123

WORKDIR /src/fe

COPY . .

ENTRYPOINT [ "python","-m","http.server","8123" ]