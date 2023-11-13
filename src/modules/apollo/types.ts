import { RuntimeStatuses } from '../../apollo/enums';
import {
    TIcon,
    TSize,
} from '../../apollo/types';
import { IRootState } from '../../store/types';

// Props
export interface IIconProps {
    icon: TIcon;
    isActive: boolean;
    isLoading: boolean;
    size: TSize;
}

export interface IContainerProps {
    title: string;
    description?: string;
}

// Redux
export type TCheckboxPattern = ('common' | 'toggle');

export interface IIconsFilters {
    isActive: boolean;
    isLoading: boolean;
    size: TSize;
}

export interface IComponentsFilters {
    buttons: {
        isDisabled: boolean;
        isLoading: boolean;
        withIconPrefix: boolean;
        withIconPostfix: boolean;
    };
    checkboxes: { pattern: TCheckboxPattern };
}

// Actions
export interface IIconsFilterUpdate {
    key: 'isActive' | 'isLoading' | 'size';
    value: boolean | TSize;
}

export interface IComponentsFilterUpdate {
    component: 'buttons' | 'checkboxes';
    filterName: keyof IComponentsFilters['buttons'] | keyof IComponentsFilters['checkboxes'];
    value: TSize | TCheckboxPattern | boolean;
}

// State
export interface IAppState {
    status: RuntimeStatuses;
    errorMessage: string;
}

export interface IComponentsState {
    status: RuntimeStatuses;
    description: string;
    filters: IComponentsFilters;
}

export interface IIconsState {
    status: RuntimeStatuses;
    description: string;
    filters: IIconsFilters;
}

export interface IApolloState {
    app: IAppState;
    components: IComponentsState;
    icons: IIconsState;
}

export interface IState extends IRootState {
    apollo: IApolloState;
}
