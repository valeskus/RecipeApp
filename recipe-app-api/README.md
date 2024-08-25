# Staging admin panel

* Install dependencies
```bash
yarn install
```

* Create `.admin.staging.env` file in `env` directory
* Populate the env file with development variables (see `env/.sample.env` for the list of variables to be defined)
* Start local server
```bash
yarn start:admin:staging
```
**NOTE: You should see no errors in the console otherwise consider server didn't start**

# Swagger

Swagger builds upon `yarn swagger`.

# Environments

The application can serve 2 databases: `production` and `staging`.\
`production` database should not be used during development, but only for deployments.\
`staging` database should be used only for development.\
Each database can be accessed via the dedicated credentials, provided in `.env` files. In case credentials are not valid, the application won't be able to access the data.


# Deployment

This project uses Heroku as a deployment platform

* login to Heroku
```bash
yarn deployment:login
```

* build a release candidate
```bash
yarn deployment:build
```

* verify the release candidate by running it in docker
```bash
docker run -d --restart=always -p 3000:3000 registry.heroku.com/recipe-hub-app-api/web:latest
```

* release
```bash
yarn deployment:release
```

* see remote server restarts
```bash
yarn deployment:logs
```

* check the host\
https://recipe-hub-app-api-24e50b540ed7.herokuapp.com
