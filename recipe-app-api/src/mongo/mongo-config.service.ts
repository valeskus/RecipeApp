import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: `mongodb+srv://${process.env.DB_HOST}`,
      retryWrites: true,
      auth: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
      dbName: process.env.DB_NAME,
    };
  }
}
