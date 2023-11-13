import React, {
    FC,
    lazy,
    Suspense,
} from 'react';

import { FooterSkeleton } from './parts/Skeleton';
import './index.scss';

const FooterLazy = lazy(() => import('./parts'));

export const Footer: FC = () => {
    return (
        <Suspense fallback={<FooterSkeleton />}>
            <FooterLazy />
        </Suspense>
    );
};
