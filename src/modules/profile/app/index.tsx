import React, { lazy } from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

const ProfilePageLazy = lazy(() => import('../pages/ProfilePage'));
const FavoritesPageLazy = lazy(() => import('../pages/FavoritesPage'));
const SettingsPageLazy = lazy(() => import('../pages/SettingsPage'));

export default () => (
    <Routes>
        <Route
            path=''
            element={<ProfilePageLazy />}
        />

        <Route
            path='favorites'
            element={<FavoritesPageLazy />}
        />

        <Route
            path='settings'
            element={<SettingsPageLazy />}
        />
    </Routes>
);
