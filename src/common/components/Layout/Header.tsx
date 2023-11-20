import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTING_URLS } from '../../constants/urls';
import { isAuthSelector } from '../../selectors';
import { Button } from '@skbkontur/react-ui';
import { People1Icon } from '@skbkontur/icons';

export const Header: FC = () => {
    const isAuth = useSelector(isAuthSelector);

    const navigate = useNavigate();

    const renderContent = () => {
        if (isAuth) {
            return (
                <Button use="text" size="medium" onClick={() => navigate(ROUTING_URLS.URL_PROFILE)}>
                    <People1Icon size={25} />
                </Button>
            );
        }

        return (
            <Button use="primary" size="medium" onClick={() => navigate(ROUTING_URLS.URL_AUTH_LOGIN)}>
                Войти
            </Button>
        );
    };

    return (
        <div className="layout-header">
            <div className="layout-header__container">
                <span className="layout-header__logo">Название платформы</span>

                {renderContent()}
            </div>
        </div>
    );
};
