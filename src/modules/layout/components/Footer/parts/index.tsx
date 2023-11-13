import React, { FC } from 'react';

import { Logo } from '../../../../../common/components/Logo';
import { Copyright } from './Copyright';
import { Navigation } from './Navigation';

const FooterComponent: FC = () => (
    <div className='footer'>
        <div className='footer__container'>
            <Logo />

            <Navigation />

            <Copyright />
        </div>
    </div>
);

export default FooterComponent;
