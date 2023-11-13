import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTING_URLS } from '../../../../../common/constants/urls';
import { AboutProject } from './AboutProject';
import { Feedback } from './Feedback';
import { UserAgreementLink } from './UserAgreementLink';

export const Navigation: FC = () => (
    <div className='footer__navigation'>
        <UserAgreementLink />

        <Link
            to={ROUTING_URLS.URL_CONFIDENTIALITY}
            className='footer__navigation-link'
        >
            Конфиденциальность
        </Link>

        <AboutProject />

        <Feedback />
    </div>
);
