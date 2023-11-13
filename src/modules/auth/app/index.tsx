import React, { useEffect } from 'react';
import {
    useLocation,
    useNavigate,
} from 'react-router-dom';

import { Button } from '../../../apollo/components/Button';
import { ROUTING_URLS } from '../../../common/constants/urls';
import { useActions } from '../../../common/hooks/useActions';
import { AuthLayout as Layout } from '../components/Layout';
import { AuthModes } from '../enums';

import { profileActions } from '../redux/actions';
import '../index.scss';

export default () => {
    const { setIsAuth } = useActions(profileActions);

    const { search } = useLocation();

    const navigate = useNavigate();

    const mode = new URLSearchParams(search).get('mode') as AuthModes;

    useEffect(() => {
        if (!Object.values(AuthModes).includes(mode)) {
            navigate(ROUTING_URLS.URL_AUTH_LOGIN);
        }
    }, [mode]);

    const setIsAuthHandler = () => {
        setIsAuth(true);
        navigate('/main');
    };

    return (
        <Layout>
            <h1>Авторизация</h1>

            <Button
                content='Войти'
                pattern='primary'
                size='md'
                onClick={setIsAuthHandler}
                dataTestId=''
            />
        </Layout>
    );
};
