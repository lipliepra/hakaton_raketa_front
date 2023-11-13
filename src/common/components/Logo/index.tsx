import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { ROUTING_URLS } from '../../constants/urls';
import { isAuthSelector } from '../../selectors';

import { ILogoProps } from './types';
import './index.scss';

export const Logo: React.FC<ILogoProps> = ({ size = 'md' }) => {
    const isAuth = useSelector(isAuthSelector);

    const navigate = useNavigate();

    return (
        <div
            className={cn('logo', `logo--${size}`)}
            onClick={() => navigate(isAuth
                ? ROUTING_URLS.URL_MAIN
                : ROUTING_URLS.URL_HOME)}
        >
            Daily<span className='logo__separator'>.</span>Story
        </div>
    );
};