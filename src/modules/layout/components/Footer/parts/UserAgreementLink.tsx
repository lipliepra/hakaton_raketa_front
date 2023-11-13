import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTING_URLS } from '../../../../../common/constants/urls';
import { isShowUserAgreementSelector } from '../../../../../common/selectors';

export const UserAgreementLink: FC = () => {
    const isShowUserAgreement = useSelector(isShowUserAgreementSelector);

    if (!isShowUserAgreement) return null;

    return (
        <Link
            to={ROUTING_URLS.URL_USER_AGREEMENT}
            className='footer__navigation-link'
        >
            Пользовательское соглашение
        </Link>
    );
};
