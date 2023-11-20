import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { THEME_2022, ThemeContext } from '@skbkontur/react-ui';

import { App } from './app';
import { store } from './store';
import './scss/app.global.scss';

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeContext.Provider value={THEME_2022}>
                <App />
            </ThemeContext.Provider>
        </Provider>
    </BrowserRouter>
);
