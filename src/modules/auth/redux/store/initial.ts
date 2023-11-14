import { RuntimeStatuses } from '../../../../common/enums';
import { DEFAULT_FORM } from '../../constants';
import {
    IAppState,
    IFormsState,
    IProfileState,
    IState,
} from '../../types';

export const APP_DEFAULT_STATE: IAppState = {
    status: RuntimeStatuses.BeforeInitial,
    errorMessage: '',
};

export const PROFILE_DEFAULT_STATE: IProfileState = {
    data: null,
    isAuth: false,
};

export const FORMS_DEFAULT_STATE: IFormsState = {
    login: DEFAULT_FORM,
    register: DEFAULT_FORM,
    restorePassword: DEFAULT_FORM,
};

export const INITIAL_STATE: IState = {
    app: APP_DEFAULT_STATE,
    profile: PROFILE_DEFAULT_STATE,
    forms: FORMS_DEFAULT_STATE,
};