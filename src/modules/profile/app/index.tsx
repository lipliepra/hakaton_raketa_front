import React, { lazy } from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

const ProfilePageLazy = lazy(() => import('../pages/ProfilePage'));
const SettingsPageLazy = lazy(() => import('../pages/SettingsPage'));

export default () => (
    <Routes>
        <Route
            path=''
            element={<ProfilePageLazy />}
        />

        <Route
            path='settings'
            element={<SettingsPageLazy />}
        />
    </Routes>
);
