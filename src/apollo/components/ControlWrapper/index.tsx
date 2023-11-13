import React, {
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { IControlWrapperProps } from './types';
import { CFC } from '../../types';
import './index.scss';

const ControlWrapperLazy = lazy(() => import('./parts/component'));

export const ControlWrapper: CFC<IControlWrapperProps> = (props) => {
    return (
        <Suspense fallback={<Skeleton {...props} />}>
            <ControlWrapperLazy {...props} />
        </Suspense>
    );
};
