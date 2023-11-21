import React, { Fragment, lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import '../index.scss';
import { ModalError } from '../../../common/components/ModalError';
import { ROUTING_URLS } from '../../../common/constants/urls';
import { useActions } from '../../../common/hooks/useActions';
import { isAuthSelector } from '../../../common/selectors';
import { appActions } from '../redux/actions';
import { errorMessageSelector, isAppErrorSelector } from '../redux/store/selectors';

const LoginPageLazy = lazy(() => import('../pages/LoginPage'));
const SignupPageLazy = lazy(() => import('../pages/SignupPage'));

export default () => {
    const isAuth = useSelector(isAuthSelector);
    const isAppError = useSelector(isAppErrorSelector);
    const errorMessage = useSelector(errorMessageSelector);

    const { closeErrorModal } = useActions(appActions);

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) navigate(ROUTING_URLS.URL_HOME);
    }, []);

    return (
        <Fragment>
            <Routes>
                <Route path="login" element={<LoginPageLazy />} />

                <Route path="signup" element={<SignupPageLazy />} />
            </Routes>

            {isAppError && <ModalError errorMessage={errorMessage} onClose={closeErrorModal} />}
        </Fragment>
    );
};
