import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../../../apollo/components/Button';
import { useAdaptive } from '../../../../../../apollo/hooks/useAdaptive';
import { ROUTING_URLS } from '../../../../../../common/constants/urls';

export const LoginButton: FC = () => {
    const navigate = useNavigate();

    const {isMobile} = useAdaptive();

    if (isMobile) return null;

    return (
        <Button
            className='header__toolbar-login-button'
            pattern='primary'
            content='Войти'
            onClick={() => navigate(ROUTING_URLS.URL_AUTH_LOGIN)}
            dataTestId='HeaderToolbarLogin'
        />
    )
};
