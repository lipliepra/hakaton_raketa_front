import { Button } from '@skbkontur/react-ui';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTING_URLS } from '../../../common/constants/urls';
import { useActions } from '../../../common/hooks/useActions';
import { profileActions } from '../../auth/redux/actions';

export default () => {
    const navigate = useNavigate();

    const { setIsAuth } = useActions(profileActions);

    const logoutHandler = () => {
        setIsAuth(false);
        navigate(ROUTING_URLS.URL_HOME);
    };

    return (
        <Fragment>
            <h1>Профиль</h1>

            <Button use="danger" onClick={logoutHandler}>
                Выйти
            </Button>
        </Fragment>
    );
};
