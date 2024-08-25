FROM --platform=linux/amd64 node:16.20.0

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY .sentryclirc ./

RUN yarn install --ignore-engines

COPY . .

RUN yarn build
RUN ./node_modules/.bin/sentry-cli sourcemaps inject ./dist
RUN ./node_modules/.bin/sentry-cli sourcemaps upload recipe-app-api ./dist

CMD ["yarn", "start:production"]