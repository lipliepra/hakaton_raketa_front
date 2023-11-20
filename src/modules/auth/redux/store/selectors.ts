import { IRootState } from '../../../../store/types';

export const loginSelector = (state: IRootState) => state.auth.form.fields.login;
export const passwordSelector = (state: IRootState) => state.auth.form.fields.password;
export const fieldsSelector = (state: IRootState) => state.auth.form.fields;
