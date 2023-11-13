import React, { FC } from 'react';

import { useAdaptive } from '../../../../../apollo/hooks/useAdaptive';

export const BottomMenuSkeleton: FC = () => {
    const { isMobile } = useAdaptive();

    if (!isMobile) return null;

    return <div className='bottom-menu bottom-menu__skeleton' />;
};
