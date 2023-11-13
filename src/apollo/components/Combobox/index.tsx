import React, {
    FC,
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { IComboboxProps } from './types';
import './index.scss';

const ComboboxLazy = lazy(() => import('./parts/component'));

export const Combobox: FC<IComboboxProps> = (props) => {
    return (
        <Suspense fallback={<Skeleton {...props} />}>
            <ComboboxLazy {...props} />
        </Suspense>
    );
};
