import React, {
    FC,
    lazy,
    Suspense,
} from 'react';

import { HeaderSkeleton } from './parts/Skeleton';
import './index.scss';

const HeaderLazy = lazy(() => import('./parts'));

export const Header: FC = () => {
    return (
        <Suspense fallback={<HeaderSkeleton />}>
            <HeaderLazy />
        </Suspense>
    );
};
