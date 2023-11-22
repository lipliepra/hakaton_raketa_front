import { RuntimeStatuses } from '../../../common/enums';
import { IRootState } from '../../../store/types';

export const isAppErrorSelector = (state: IRootState) => state.app.status === RuntimeStatuses.Error;
export const errorMessageSelector = (state: IRootState) => state.app.errorMessage;
