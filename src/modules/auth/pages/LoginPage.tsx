import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../apollo/components/Button';
import { useActions } from '../../../common/hooks/useActions';
import { profileActions } from '../redux/actions';

export default () => {
    const { setIsAuth } = useActions(profileActions);

    const navigate = useNavigate();

    const setIsAuthHandler = () => {
        setIsAuth(true);
        navigate('/main');
    };

    return (
        <Fragment>
            <h1>Авторизация</h1>

            <Button
                content='Войти'
                pattern='primary'
                size='md'
                onClick={setIsAuthHandler}
                dataTestId=''
            />
        </Fragment>
    );
};
