import React, {
    FC,
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { IButtonProps } from './types';
import './index.scss';

const ButtonLazy = lazy(() => import('./parts/component'));

export const Button: FC<IButtonProps> = (props) => {
    return (
        <Suspense fallback={<Skeleton {...props} />}>
            <ButtonLazy {...props} />
        </Suspense>
    );
};