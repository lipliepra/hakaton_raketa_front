import React, { lazy } from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

const HomePageLazy = lazy(() => import('../pages/HomePage'));
const NothingFoundLazy = lazy(() => import('../pages/NotFoundPage'));

export default () => (
    <Routes>
        <Route
            path='home'
            element={<HomePageLazy />}
        />

        <Route
            path='*'
            element={<NothingFoundLazy />}
        />
    </Routes>
);
