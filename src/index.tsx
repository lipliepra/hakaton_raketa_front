import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import { AppSettingsWrapper } from './wrappers/AppSettingsWrapper';
import { NotFoundWrapper } from './wrappers/NotFoundWrapper';
import './scss/app.global.scss';

const root = createRoot(document.getElementById('root'));

root.render(
    <AppSettingsWrapper>
        <NotFoundWrapper>
            <App />
        </NotFoundWrapper>
    </AppSettingsWrapper>,
);
