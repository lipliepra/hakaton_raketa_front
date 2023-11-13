import React from 'react';

import { useAdaptive } from '../../../../../../apollo/hooks/useAdaptive';
import { DefaultNavigation } from './DefaultNavigation';
import { AdaptiveNavigation } from './AdaptiveNavigation';

export const Navigation: React.FC = () => {
    const { isAdaptive } = useAdaptive();

    if (isAdaptive) return <AdaptiveNavigation />;

    return <DefaultNavigation />;
};
