import React, {
    FC,
    Suspense,
} from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';

import { Preloader } from '../common/components/Preloader';
import { AuthLazy } from '../modules/auth/entry';
import { Routing } from './routing';

export const App: FC = () => (
    <Suspense fallback={<Preloader />}>
        <Routes>
            <Route
                path='/*'
                element={<Routing />}
            />

            <Route
                path='auth'
                element={<AuthLazy />}
            />
        </Routes>
    </Suspense>
);
