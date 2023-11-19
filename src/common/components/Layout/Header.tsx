import { Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTING_URLS } from '../../constants/urls';
import { isAuthSelector } from '../../selectors';

export const Header: FC = () => {
    const isAuth = useSelector(isAuthSelector);

    const navigate = useNavigate();

    const renderContent = () => {
        if (isAuth) {
            return (
                <IconButton onClick={() => navigate(ROUTING_URLS.URL_PROFILE)}>
                    <AccountCircleIcon />
                </IconButton>
            );
        }

        return <Button onClick={() => navigate(ROUTING_URLS.URL_AUTH_LOGIN)}>Войти</Button>;
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
