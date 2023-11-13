import { RuntimeStatuses } from '../../../../apollo/enums';
import { IState } from '../../types';

export const appStatusSelector = (state: IState, status: RuntimeStatuses) => state.appSettings.status === status;
export const appsErrorMessageSelector = (state: IState) => state.appSettings.errorMessage;

export const componentsStatusSelector = (state: IState, status: RuntimeStatuses) => state.apollo.components.status === status;
export const componentsDescriptionSelector = (state: IState) => state.apollo.components.description;
export const componentsButtonsFiltersSelector = (state: IState) => state.apollo.components.filters.buttons;
export const componentsCheckboxesFiltersSelector = (state: IState) => state.apollo.components.filters.checkboxes;

export const iconsStatusSelector = (state: IState, status: RuntimeStatuses) => state.apollo.icons.status === status;
export const iconsDescriptionSelector = (state: IState) => state.apollo.icons.description;
export const iconsFiltersFieldSelector = (state: IState) => state.apollo.icons.filters;
