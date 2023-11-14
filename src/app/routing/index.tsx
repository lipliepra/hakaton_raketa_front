import React, {
    FC,
    Suspense,
} from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

import { HomeLazy } from '../../modules/home/entry';
import { ProfileLazy } from '../../modules/profile/entry';

export const Routing: FC = () => (
    <Suspense fallback={'Загрузка...'}>
        <Routes>
            <Route
                path='/*'
                element={<HomeLazy />}
            />

            <Route
                path='profile/*'
                element={<ProfileLazy />}
            />
        </Routes>
    </Suspense>
);
