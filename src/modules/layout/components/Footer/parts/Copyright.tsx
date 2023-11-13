import React from 'react';

import { FOOTER_COPYRIGHT } from '../../../constants';

export const Copyright: React.FC = () => (
    <a
        href='https://github.com/lipliepra'
        target='_blank'
        rel='noreferrer'
        className='footer__copyright'
    >
        {FOOTER_COPYRIGHT}
    </a>
);
