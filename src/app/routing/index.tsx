import React, {
    FC,
    Suspense,
} from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

import { ApolloLazy } from '../../modules/apollo/entry';
import { HomeLazy } from '../../modules/home/entry';
import { Layout } from '../../modules/layout/app';
import { ProfileLazy } from '../../modules/profile/entry';

export const Routing: FC = () => (
    <Layout>
        {/* TODO: Сделать Skeleton */}
        <Suspense fallback={'Загрузка...'}>
            <Routes>
                <Route
                    path='/*'
                    element={<HomeLazy />}
                />

                <Route
                    path='apollo/*'
                    element={<ApolloLazy />}
                />

                <Route
                    path='profile/*'
                    element={<ProfileLazy />}
                />
            </Routes>
        </Suspense>
    </Layout>
);
