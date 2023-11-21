import { RuntimeStatuses } from '../../../../common/enums';
import { IRootState } from '../../../../store/types';

export const isAppErrorSelector = (state: IRootState) => state.auth.app.status === RuntimeStatuses.Error;
export const errorMessageSelector = (state: IRootState) => state.auth.app.errorMessage;
export const loginFormLoginSelector = (state: IRootState) => state.auth.loginForm.fields.login;
export const loginFormPasswordSelector = (state: IRootState) => state.auth.loginForm.fields.password;
export const fieldsSelector = (state: IRootState) => state.auth.loginForm.fields;
