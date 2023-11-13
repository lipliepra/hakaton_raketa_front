import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ROUTING_URLS } from '../../../common/constants/urls';
import { isAuthSelector } from '../../../common/selectors';

export default () => {
    const isAuth = useSelector(isAuthSelector);

    const navigate = useNavigate();

    return (
        <Fragment>
            <div>Ничего не найдено...</div>

            <div
                onClick={() => navigate(isAuth
                    ? ROUTING_URLS.URL_MAIN
                    : ROUTING_URLS.URL_HOME)}
            >
                Вернуться на главную
            </div>
        </Fragment>
    );
};
