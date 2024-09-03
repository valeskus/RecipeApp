import { SENTRY_DSN } from '@env';
import * as SentryLib from '@sentry/react-native';

class SentryVendor {
  public init() {
    SentryLib.init({
      dsn: SENTRY_DSN,
    });
  }

  public reportAction(name: string) {
    SentryLib.addBreadcrumb({
      level: 'info',
      message: name,
      timestamp: Date.now(),
    });
  }

  public reportError(moduleName: string, error: unknown) {
    if (typeof error !== 'object') {
      SentryLib.addBreadcrumb({
        level: 'error',
        message: `${moduleName}:${JSON.stringify(error)}`,
        timestamp: Date.now(),
      });

      return;
    }

    if (error === null) {
      SentryLib.addBreadcrumb({
        level: 'error',
        message: `${moduleName}:nullish error`,
        timestamp: Date.now(),
      });

      return;
    }

    if ('message' in error) {
      SentryLib.addBreadcrumb({
        level: 'error',
        message: `${moduleName}:${JSON.stringify(error.message)}`,
        timestamp: Date.now(),
      });

      return;
    }

    SentryLib.addBreadcrumb({
      level: 'error',
      message: `${moduleName}:unknown`,
      timestamp: Date.now(),
      data: error,
    });
  }
}

export const Sentry = new SentryVendor();
