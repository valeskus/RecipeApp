import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import * as admin from 'firebase-admin/app';

import { MongoExceptionFilter } from './exception-filters/mongo.exception-filter';

export function bootstrap(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(new MongoExceptionFilter({ httpAdapter }));

  if (process.env.API_ENV === 'admin') {
    admin.initializeApp({
      credential: admin.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      })
    });
  }
}
