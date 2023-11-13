import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../apollo/components/Button';

export default () => {
    const navigate = useNavigate();

    const navigateToApolloModuleHandler = () => {
        navigate('/apollo');
    };

    return (
        <Fragment>
            <h1>Домашняя</h1>

            <Button
                content='Apollo'
                pattern='primary'
                size='md'
                onClick={navigateToApolloModuleHandler}
                dataTestId=''
            />
        </Fragment>
    );
}