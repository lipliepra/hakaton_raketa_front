import { Button } from '@skbkontur/react-ui';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTING_URLS } from '../../constants/urls';
import { isAuthSelector } from '../../selectors';

export const Header: FC = () => {
    const isAuth = useSelector(isAuthSelector);

    const navigate = useNavigate();

    return (
        <div className="layout-header">
            <div className="layout-header__container">
                <span className="layout-header__logo">Мир</span>

                {isAuth ? (
                    <Button use="link" width={190} onClick={() => navigate(ROUTING_URLS.URL_PROFILE)}>
                        Профайл
                    </Button>
                ) : (
                    <Button width={190} onClick={() => navigate(ROUTING_URLS.URL_AUTH_LOGIN)}>
                        Войти
                    </Button>
                )}
            </div>
        </div>
    );
};
