import { lazy } from 'react';

export const AuthLazy = lazy(() => import('./app'));

export { authReducers } from './redux/reducers';

export { INITIAL_STATE } from './redux/store/initial';

export { IState } from './types';