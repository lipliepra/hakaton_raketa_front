import { API_CONTROLLER } from '../../../api/controller';
import { IResponseData, ThunkActionPromise } from '../../../common/types';
import { IRootState } from '../../../store/types';
import { ENDPOINTS } from './api/endpoints';
import { updateField } from './slices/formSlice';
import { setProfileData, setIsAuth, setToken } from './slices/profileSlice';
import { fieldsSelector } from './store/selectors';

const submitLogin = (): ThunkActionPromise<IRootState, boolean> => (dispatch, getState) => {
    const fields = fieldsSelector(getState());

    return API_CONTROLLER.post<IResponseData<{ token: string }>>(ENDPOINTS.login, { ...fields })
        .then((response) => {
            const { result } = response.data;

            if (result) {
                dispatch(setIsAuth(true));
                dispatch(setProfileData(fields));
                dispatch(setToken(result.token));
            }
        })
        .catch(() => {
            // TODO: впендюрить onCatch
        });
};

export const formActions = {
    updateField,
    submitLogin
};

export const profileActions = {
    setProfileData,
    setIsAuth
};
