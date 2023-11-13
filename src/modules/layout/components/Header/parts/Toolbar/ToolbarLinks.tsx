import React, {
    FC,
    Fragment,
} from 'react';

import { useAdaptive } from '../../../../../../apollo/hooks/useAdaptive';
import { AddNewLink } from './AddNewLink';
import { FavoritesLink } from './FavoritesLink';

export const ToolbarLinks: FC = () => {
    const {isMobile} = useAdaptive()

    if (isMobile) return null;

    return (
        <Fragment>
            <AddNewLink />

            <FavoritesLink />
        </Fragment>
    )
}
