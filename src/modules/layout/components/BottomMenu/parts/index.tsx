import React, {
    FC,
    useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Icon } from '../../../../../apollo/components/Icon';
import { useAdaptive } from '../../../../../apollo/hooks/useAdaptive';
import { isAuthSelector } from '../../../../../common/selectors';
import { BOTTOM_MENU_LINKS } from '../../../constants';

const BottomMenuComponent: FC = () => {
    const isAuth = useSelector(isAuthSelector);

    const { isMobile } = useAdaptive();

    const menuLinks = useMemo(() => (isAuth
        ? BOTTOM_MENU_LINKS.auth
        : BOTTOM_MENU_LINKS.notAuth), [isAuth]);

    if (!isMobile) return null;

    return (
        <div className='bottom-menu'>
            {menuLinks.map((item) => (
                <NavLink
                    key={item.link}
                    to={item.link}
                    className='bottom-menu__link'
                >
                    <Icon
                        path={item.icon}
                        dataTestId='BottomMenuLink'
                    />

                    {item.content}
                </NavLink>
            ))}
        </div>
    );
};

export default BottomMenuComponent;
