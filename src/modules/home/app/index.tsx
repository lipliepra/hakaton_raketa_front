import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import {
    Route,
    Routes,
} from 'react-router-dom';

import { isShowUserAgreementSelector } from '../../../common/selectors';

const StartPageLazy = lazy(() => import('../pages/StartPage'));
const HomePageLazy = lazy(() => import('../pages/HomePage'));
const MainPageLazy = lazy(() => import('../pages/MainPage'));
const UserAgreementPageLazy = lazy(() => import('../pages/UserAgreementPage'));
const ConfidentialityPageLazy = lazy(() => import('../pages/ConfidentialityPage'));
const NothingFoundLazy = lazy(() => import('../pages/NotFoundPage'));

export default () => {
    const isShowUserAgreementPage = useSelector(isShowUserAgreementSelector);

    return (
        <Routes>
            <Route
                path='/'
                element={<StartPageLazy />}
            />

            <Route
                path='home'
                element={<HomePageLazy />}
            />

            <Route
                path='main'
                element={<MainPageLazy />}
            />

            <Route
                path='confidentiality'
                element={<ConfidentialityPageLazy />}
            />

            {isShowUserAgreementPage && (
                <Route
                    path='user-agreement'
                    element={<UserAgreementPageLazy />}
                />
            )}

            <Route
                path='*'
                element={<NothingFoundLazy />}
            />
        </Routes>
    );
};
