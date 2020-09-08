FROM golang:1.14.0-alpine3.11
RUN apk add git
COPY . .
RUN apk add --no-cache git gcc musl-dev
RUN apk add --update --no-cache ca-certificates cmake make g++ openssl-dev git curl pkgconfig
RUN apk add --update --no-cache ca-certificates cmake make g++ openssl-libs-static git curl pkgconfig openssl-dev openssl openssl-libs-static
RUN git clone -b 1.7 https://github.com/neo4j-drivers/seabolt.git /seabolt
WORKDIR /seabolt/build
RUN cmake -D CMAKE_BUILD_TYPE=Release -D CMAKE_INSTALL_LIBDIR=lib .. && cmake --build . --target install

WORKDIR /app

RUN go get -d -v ./...
RUN go install -v ./...

CMD ["app"]