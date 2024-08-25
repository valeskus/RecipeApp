// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `./env/.${process.env.APP_ENV}.env` });

import * as Sentry from '@sentry/nestjs';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    nodeProfilingIntegration(),
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});
