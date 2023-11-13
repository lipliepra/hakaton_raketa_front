import React from 'react';
import { Provider } from 'react-redux';

import { CFC } from '../../apollo/types';
import { AppSettings } from '../../modules/appSettings';
import { NetworkWrapper } from '../NetworkWrapper';
import { SentryBoundary } from '../../common/components/SentryBoundary';
import { store } from '../../store';

export const AppSettingsWrapper: CFC = ({ children }) => {
    return (
        <SentryBoundary>
            <NetworkWrapper>
                <Provider store={store}>
                    <AppSettings>
                        {children}
                    </AppSettings>
                </Provider>
            </NetworkWrapper>
        </SentryBoundary>
    );
};