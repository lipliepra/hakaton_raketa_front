import React, {
    FC,
    lazy,
    Suspense,
} from 'react';

import { BottomMenuSkeleton } from './parts/Skeleton';
import './index.scss';

const BottomMenuLazy = lazy(() => import('./parts'));

export const BottomMenu: FC = () => (
    <Suspense fallback={<BottomMenuSkeleton />}>
        <BottomMenuLazy />
    </Suspense>
);
