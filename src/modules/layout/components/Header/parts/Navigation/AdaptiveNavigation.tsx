import React, {
    FC,
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    NavLink,
    useLocation,
} from 'react-router-dom';
import cn from 'classnames';

import { ICONS } from '../../../../../../apollo/assets';
import { Icon } from '../../../../../../apollo/components/Icon';
import { useAdaptive } from '../../../../../../apollo/hooks/useAdaptive';
import { useDisableScroll } from '../../../../../../apollo/hooks/useDisableScroll';
import { useOnClickOutside } from '../../../../../../apollo/hooks/useOnClickOutside';
import { HEADER_NAVIGATION_LINKS } from '../../../../constants';

export const AdaptiveNavigation: FC = () => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    const { isAdaptive } = useAdaptive();

    const location = useLocation();

    useDisableScroll(isShowMenu);

    useOnClickOutside(ref, () => setIsShowMenu(false));

    useEffect(() => {
        setIsShowMenu(false);
    }, [location.pathname]);

    const setIsShowMenuHandler = (value: boolean) => () => {
        setIsShowMenu(value);
    };

    return (
        <div
            ref={ref}
            className='header__dropdown'
            onMouseEnter={!isAdaptive
                ? setIsShowMenuHandler(true)
                : undefined}
            onMouseLeave={!isAdaptive
                ? setIsShowMenuHandler(false)
                : undefined}
        >
            <div
                className={cn('header__dropdown-activator', { active: isShowMenu })}
                onClick={isAdaptive
                    ? setIsShowMenuHandler(!isShowMenu)
                    : undefined}
            >
                <Icon
                    path={ICONS.Burger}
                    isActive={isShowMenu}
                    dataTestId='HeaderNavigationDropdownActivator'
                />
            </div>

            <div className={cn('header__dropdown-list', { opened: isShowMenu })}>
                {HEADER_NAVIGATION_LINKS.map((item) => (
                    <NavLink
                        key={item.link}
                        to={item.link}
                        onClick={setIsShowMenuHandler(false)}
                        className='header__dropdown-item'
                    >
                        {item.content}

                        <Icon
                            className='header__dropdown-item-icon'
                            path={ICONS.ChevronRight}
                            dataTestId='HeaderNavigationDropdownItem'
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    );
};
