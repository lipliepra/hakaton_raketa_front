import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../index.scss';

const LoginPageLazy = lazy(() => import('../pages/LoginPage'));
const SignupPageLazy = lazy(() => import('../pages/SignupPage'));

export default () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPageLazy />} />

            <Route path="signup" element={<SignupPageLazy />} />
        </Routes>
    );
};
