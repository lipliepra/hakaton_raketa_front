import { ThunkActionBase } from '../../../common/types';
import { IState } from '../types';
import {
    setProfileData,
    setIsAuth,
} from './slices/profileSlice';

const logout = (): ThunkActionBase<IState> => (dispatch) => {
    dispatch(setIsAuth(false));
};

export const headerActions = { logout };

export const profileActions = {
    setProfileData,
    setIsAuth,
};