import React, {
    lazy,
    useEffect,
} from 'react';
import {
    Route,
    Routes,
    useLocation,
    useNavigate,
} from 'react-router-dom';

import { ROUTING_URLS } from '../../../common/constants/urls';
import { AuthModes } from '../enums';

const LoginPageLazy = lazy(() => import('../pages/LoginPage'));
const SignupPageLazy = lazy(() => import('../pages/SignupPage'));

export default () => {
    const { search } = useLocation();

    const navigate = useNavigate();

    const mode = new URLSearchParams(search).get('mode') as AuthModes;

    useEffect(() => {
        if (!Object.values(AuthModes).includes(mode)) {
            navigate(ROUTING_URLS.URL_AUTH_LOGIN);
        }
    }, [mode]);

    return (
        <Routes>
            <Route
                path={ROUTING_URLS.URL_AUTH_LOGIN}
                element={<LoginPageLazy />}
            />

            <Route
                path={ROUTING_URLS.URL_AUTH_SIGNUP}
                element={<SignupPageLazy />}
            />
        </Routes>
    );
};
