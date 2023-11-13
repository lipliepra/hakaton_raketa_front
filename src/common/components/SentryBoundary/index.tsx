import React from 'react';
import * as Sentry from '@sentry/react';

import { CFC } from '../../../apollo/types';
import { SENTRY_OPTIONS } from './constants';

export const SentryBoundary: CFC = ({ children }) => (
    <Sentry.ErrorBoundary
        onError={(error) => {
            alert(error);
            Sentry.init(SENTRY_OPTIONS);
        }}
    >
        {children}
    </Sentry.ErrorBoundary>
);
