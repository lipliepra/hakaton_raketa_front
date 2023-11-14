import { IRootState } from '../store/types';

// Profile
export const isAuthSelector = (state: IRootState) => state.auth.profile.isAuth;
