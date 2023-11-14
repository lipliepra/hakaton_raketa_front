import { RuntimeStatuses } from '../../common/enums';
import { IForm } from './types';

export const DEFAULT_FORM: IForm = {
    status: RuntimeStatuses.Ready,
    errorMessage: '',
    formErrors: {},
    fields: {}
};
