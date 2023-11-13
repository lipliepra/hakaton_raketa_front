import { RuntimeStatuses } from '../../../../apollo/enums';
import { IState } from '../../types';

export const appSettingsStatusSelector = (state: IState, status: RuntimeStatuses) => state.appSettings.status === status;
export const appSettingsErrorMessageSelector = (state: IState) => state.appSettings.errorMessage;
