import React, {
    FC,
    Suspense,
} from 'react';
import { useSelector } from 'react-redux';
import {
    Route,
    Routes,
} from 'react-router-dom';

import { Layout } from '../common/components/Layout';
import { ModalError } from '../common/components/ModalError';
import { isAuthSelector } from '../common/selectors';
import { HomeLazy } from '../modules/home/entry';
import { ProfileLazy } from '../modules/profile/entry';

export const Routing: FC = () => {
    const isAuth = useSelector(isAuthSelector);

    return (
        <Layout>
            <Suspense fallback={'Загрузка...'}>
                <Routes>
                    <Route
                        path='/*'
                        element={<HomeLazy />}
                    />

                    {isAuth && (
                        <Route
                            path='profile/*'
                            element={<ProfileLazy />}
                        />
                    )}
                </Routes>
            </Suspense>

            <ModalError />
        </Layout>
    );
};
