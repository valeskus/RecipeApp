import { NestFactory } from '@nestjs/core';
import * as Express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as Functions from 'firebase-functions';

import { AppModule } from './app.module';
import { bootstrap } from './bootstrap';

const expressServer = Express();
const createFunction = async (expressInstance: Express.Express): Promise<void> => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  bootstrap(app);

  await app.init();
};

export const api = Functions.https.onRequest(async (request, response) => {
  await createFunction(expressServer);
  expressServer(request, response);
});
