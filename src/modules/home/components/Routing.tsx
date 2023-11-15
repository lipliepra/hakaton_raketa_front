import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePageLazy = lazy(() => import('../pages/HomePage'));
const AboutServicePageLazy = lazy(() => import('../pages/AboutServicePage'));
const LicensePageLazy = lazy(() => import('../pages/LicensePage'));
const QuestionsPageLazy = lazy(() => import('../pages/QuestionsPage'));
const NothingFoundLazy = lazy(() => import('../pages/NotFoundPage'));

export default () => (
    <Routes>
        <Route path="/" element={<HomePageLazy />} />

        <Route path="questions" element={<QuestionsPageLazy />} />

        <Route path="about" element={<AboutServicePageLazy />} />

        <Route path="license" element={<LicensePageLazy />} />

        <Route path="*" element={<NothingFoundLazy />} />
    </Routes>
);
