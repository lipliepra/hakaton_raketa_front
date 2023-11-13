import React, {
    FC,
    useEffect,
    useRef,
    useState,
} from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import { ICONS } from '../../../../../../apollo/assets';
import { Icon } from '../../../../../../apollo/components/Icon';
import { useAdaptive } from '../../../../../../apollo/hooks/useAdaptive';
import { useDisableScroll } from '../../../../../../apollo/hooks/useDisableScroll';
import { useOnClickOutside } from '../../../../../../apollo/hooks/useOnClickOutside';
import { ProfileToolList } from './ProfileToolList';

export const ProfileTool: FC = () => {
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
                    path={ICONS.UserCircle}
                    isActive={isShowMenu}
                    dataTestId='HeaderProfileToolDropdownActivator'
                />
            </div>

            <ProfileToolList isOpened={isShowMenu} />
        </div>
    );
};