import React from 'react';
import { NavLink } from 'react-router-dom';

import { HEADER_NAVIGATION_LINKS } from '../../../../constants';

export const DefaultNavigation: React.FC = () => (
    <div className='header__navigation'>
        {HEADER_NAVIGATION_LINKS.map((item) => (
            <NavLink
                key={item.link}
                to={item.link}
                className='header__navigation-link'
            >
                {item.content}
            </NavLink>
        ))}
    </div>
);
