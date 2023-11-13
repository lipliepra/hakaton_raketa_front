import { RuntimeStatuses } from '../../apollo/enums';
import { TNullable } from '../../apollo/types';

export interface IProfileData {
    id: string;
    firstName: string;
    lastName: string;
    login: string;
    imageId: TNullable<string>;
    birthday: TNullable<string>;
    accessRoles: TNullable<IRoles>;
}

interface IRoles {
    isAdmin: boolean;
    isModer: boolean;
}

export interface IForm {
    status: RuntimeStatuses;
    errorMessage: string;
    fields: { [key: string]: any };
    formErrors: { [key: string]: string };
}

export interface IAppState {
    status: RuntimeStatuses;
    errorMessage: string;
}

export interface IProfileState {
    data: TNullable<IProfileData>;
    isAuth: boolean;
}

export interface IFormsState {
    login: IForm;
    register: IForm;
    restorePassword: IForm;
}

export interface IState {
    app: IAppState;
    profile: IProfileState;
    forms: IFormsState;
}
