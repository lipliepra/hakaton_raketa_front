import React, { lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import '../index.scss';
import { ROUTING_URLS } from '../../../common/constants/urls';
import { isAuthSelector } from '../../../common/selectors';

const LoginPageLazy = lazy(() => import('../pages/LoginPage'));
const SignupPageLazy = lazy(() => import('../pages/SignupPage'));

export default () => {
    const isAuth = useSelector(isAuthSelector);

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) navigate(ROUTING_URLS.URL_HOME);
    }, []);

    return (
        <Routes>
            <Route path="login" element={<LoginPageLazy />} />

            <Route path="signup" element={<SignupPageLazy />} />
        </Routes>
    );
};
