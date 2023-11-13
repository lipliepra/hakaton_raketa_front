import React, { FC } from 'react';
import {
    Link,
    useLocation,
} from 'react-router-dom';

import { ROUTING_URLS } from '../../../../common/constants/urls';

export const LinkToOtherPage: FC = () => {
    const { search } = useLocation();

    const mode = new URLSearchParams(search).get('mode');

    return (
        <Link
            to={mode === 'signup'
                ? ROUTING_URLS.URL_AUTH_LOGIN
                : ROUTING_URLS.URL_AUTH_SIGNUP}
            className='auth__header-link'
        >
            {mode === 'signup'
                ? 'Уже есть аккаунт? Авторизуйтесь!'
                : 'Ещё нет аккаунта? Создайте его!'}
        </Link>
    );
};
