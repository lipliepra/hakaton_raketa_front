import { RuntimeStatuses } from '../../../../apollo/enums';
import {
    IAppState,
    IComponentsState,
    IIconsState,
} from '../../types';

export const APP_DEFAULT_STATE: IAppState = {
    status: RuntimeStatuses.BeforeInitial,
    errorMessage: '',
};

export const COMPONENTS_DEFAULT_STATE: IComponentsState = {
    status: RuntimeStatuses.BeforeInitial,
    description: '',
    filters: {
        buttons: {
            isDisabled: false,
            isLoading: false,
            withIconPrefix: false,
            withIconPostfix: false,
        },
        checkboxes: { pattern: 'common' },
    },
};

export const ICONS_DEFAULT_STATE: IIconsState = {
    status: RuntimeStatuses.BeforeInitial,
    description: '',
    filters: {
        isActive: false,
        isLoading: false,
        size: 'md',
    },
};
