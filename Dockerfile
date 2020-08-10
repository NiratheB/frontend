
FROM node:14.7.0

# Set working directory.
RUN mkdir /app

# Copy app dependencies.
COPY ./package.json ./package-lock.json /app/
WORKDIR /app

# Install app dependencies.
RUN npm install

# Copy app files.
COPY . /app

EXPOSE 4200

# Build app
RUN npm run build

RUN $(npm bin)/ng build

RUN $(npm bin)/ng serve


