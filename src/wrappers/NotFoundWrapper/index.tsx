import React, {
    Fragment,
    useLayoutEffect,
} from 'react';
import {
    useLocation,
    useNavigate,
} from 'react-router-dom';

import { sStorage } from '../../apollo/utils/sStorage';
import { CFC } from '../../apollo/types';

export const NotFoundWrapper: CFC = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const hasNotFoundStatusInUrl = location.search.includes('not-found');
    const hasNotFoundKeyInStorage = Boolean(sStorage.get('notFound'));

    useLayoutEffect(() => {
        if (hasNotFoundKeyInStorage && hasNotFoundStatusInUrl) {
            sStorage.remove('notFound');
            navigate(location.pathname);
        }
    }, [location.search]);

    if (hasNotFoundStatusInUrl && !hasNotFoundKeyInStorage) {
        sStorage.set('notFound', 'true');

        return <span>Страница не найдена</span>;
    }

    return <Fragment>{children}</Fragment>;
};
