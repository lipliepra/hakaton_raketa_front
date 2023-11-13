import { BrowserTracing } from '@sentry/react';

import {
    __FRONT_SENTRY_DSN__,
    __FRONT_SENTRY_ENV__,
} from '../../../../config/environment';

export const SENTRY_OPTIONS = {
    dsn: __FRONT_SENTRY_DSN__,
    environment: __FRONT_SENTRY_ENV__,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
};