import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTING_URLS } from '../../../common/constants/urls';

const HomePageLazy = lazy(() => import('../pages/HomePage'));
const NothingFoundLazy = lazy(() => import('../pages/NotFoundPage'));

export default () => (
    <Routes>
        <Route path={ROUTING_URLS.URL_HOME} element={<HomePageLazy />} />

        <Route path="*" element={<NothingFoundLazy />} />
    </Routes>
);
