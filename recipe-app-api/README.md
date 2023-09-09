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

Swagger runs upon `yarn start:dev`.\
The URL is `http://localhost:3000/api`

# Environments

The application can serve 2 databases: `production` and `staging`.\
`production` database should not be used during development, but only for deployments.\
`staging` database should be used only for development.\
Each database can be accessed via the dedicated credentials, provided in `.env` files. In case credentials are not valid, the application won't be able to access the data.


# Deployment

This project uses [Firebase Cloud Functions](https://firebase.google.com/docs/functions) as a deployment platform

* Install dependencies
```bash
yarn install
```

* Create `.env` file in the root directory
* Populate the env file with production variables (see `env/.sample.env` for the list of variables to be defined)
* Login to Firebase and follow the instructions
```bash
./node_modules/.bin/firebase login
```

* Verify the future deployment by running the command
```bash
yarn firebase:dry-run:{env}
```
**NOTE: You should see no errors in the console otherwise consider the deployment candidate is broken**

**NOTE: Firebase CLI provides a local URL which should be used for verification of the deployment candidate**

* Deploy
```bash
yarn firebase:deploy:{env}
```

**NOTE: You should see no errors in the console otherwise consider the deployment has failed**
