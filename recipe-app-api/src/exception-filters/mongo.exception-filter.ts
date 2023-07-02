import { MongoServerError } from 'mongodb';
import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch(MongoServerError)
export class MongoExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

  catch(exception: MongoServerError, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    switch (exception.code) {
      case 11000: {
        const context = host.switchToHttp();

        const [key] = Object.keys(exception.keyValue);

        const baseError = new BadRequestException(`Item ${key} with value ${exception.keyValue[key]} already exists`);

        httpAdapter.reply(context.getResponse(), baseError.getResponse(), baseError.getStatus());
      }
    }
  }
}
