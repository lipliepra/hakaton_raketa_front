import React, {
    FC,
    lazy,
    Suspense,
} from 'react';

import { Skeleton } from './parts/skeleton';
import { IAccordionProps } from './types';
import './index.scss';

const AccordionLazy = lazy(() => import('./parts/component'));

export const Accordion: FC<IAccordionProps> = (props) => {
    return (
        <Suspense fallback={<Skeleton />}>
            <AccordionLazy {...props} />
        </Suspense>
    );
};