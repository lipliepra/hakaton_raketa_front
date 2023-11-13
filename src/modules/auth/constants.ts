import { RuntimeStatuses } from '../../apollo/enums';
import { AuthModes } from './enums';
import {
    IForm,
    IProfileData,
} from './types';

export const DEFAULT_PROFILE_DATA: IProfileData = {
    id: 'e321be73-cb87-41da-a35f-68b2b4ad2a38',
    firstName: 'Илья',
    lastName: 'Дзись',
    login: 'lipliepra',
    imageId: null,
    birthday: null,
    accessRoles: {
        isModer: true,
        isAdmin: true,
    },
};

export const DEFAULT_FORM: IForm = {
    status: RuntimeStatuses.Ready,
    errorMessage: '',
    formErrors: {},
    fields: {},
};

export const AUTH_MODE_TITLES: Record<AuthModes, string> = {
    login: 'Авторизация',
    signup: 'Регистрация',
    changePassword: 'Смена пароля',
};
