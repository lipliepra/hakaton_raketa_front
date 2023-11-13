import React from 'react';

import { Logo } from '../../../../../common/components/Logo';
import { Navigation } from './Navigation';
import { Toolbar } from './Toolbar';

export default () => (
    <div className='header'>
        <div className='header__container'>
            <Logo />

            <Navigation />

            <Toolbar />
        </div>
    </div>
);
