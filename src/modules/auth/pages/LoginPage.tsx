import { Button } from '@skbkontur/react-ui';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../common/hooks/useActions';
import { profileActions } from '../redux/actions';

export default () => {
    const navigate = useNavigate();

    const { setIsAuth } = useActions(profileActions);

    const loginHandler = () => {
        setIsAuth(true);
        navigate('/');
    };

    return (
        <Fragment>
            <h1>Авторизация</h1>

            <Button onClick={loginHandler}>Авторизоваться</Button>
        </Fragment>
    );
};
