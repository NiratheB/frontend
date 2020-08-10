### Stage 1: build ###

FROM node:11.4.0-alpine as builder

# Set working directory.
RUN mkdir /app

# Copy app dependencies.
COPY ./package.json ./package-lock.json /app/
WORKDIR /app

# Install app dependencies.
RUN npm install

# Copy app files.
COPY . /app


# Build app
RUN npm run build

RUN $(npm bin)/ng build

RUN $(npm bin)/ng serve
