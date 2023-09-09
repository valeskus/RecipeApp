import { Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class AdminApiGuard implements CanActivate {
  canActivate(): boolean {
    return process.env.API_ENV === 'admin';
  }
}
