import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTING_URLS } from '../../../common/constants/urls';

export default () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <div>Ничего не найдено...</div>

            <br />

            <div onClick={() => navigate(ROUTING_URLS.URL_HOME)}>Вернуться на главную</div>
        </Fragment>
    );
};
