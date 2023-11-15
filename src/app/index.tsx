import React, { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthLazy } from '../modules/auth/entry';
import { Routing } from './Routing';

export const App: FC = () => (
    <Suspense fallback={'Загрузка..'}>
        <Routes>
            <Route path="/*" element={<Routing />} />

            <Route path="auth/*" element={<AuthLazy />} />
        </Routes>
    </Suspense>
);
