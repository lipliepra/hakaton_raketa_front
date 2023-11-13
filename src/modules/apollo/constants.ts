import { lazy } from 'react';
import { ICONS } from '../../apollo/assets';
import { TButtonPattern } from '../../apollo/components/Button/types';
import {
    TIcon,
    TOptions,
} from '../../apollo/types';
import { TCheckboxPattern } from './types';

const HomePageLazy = lazy(() => import('./pages/HomePage'));
const ComponentsPageLazy = lazy(() => import('./pages/ComponentsPage'));
const IconsPageLazy = lazy(() => import('./pages/IconsPage'));
const ColorsPageLazy = lazy(() => import('./pages/ColorsPage'));

export const APOLLO_ROUTES = [
    {
        path: '',
        element: HomePageLazy,
    },
    {
        path: 'components',
        element: ComponentsPageLazy,
    },
    {
        path: 'icons',
        element: IconsPageLazy,
    },
    {
        path: 'colors',
        element: ColorsPageLazy,
    },
];

export const ACCORDION_TITLE = 'Заголовок';
export const ACCORDION_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const RADIO_OPTIONS: TOptions<{ value: string, hint?: string }> = Array.from({ length: 3 }).map((_, index) => ({
    label: `Вариант ${index + 1}`,
    value: String(index + 1),
    ...(index == 1 && { hint: 'Подсказка' }),
    ...(index === 2 && { isDisabled: true }),

}));

export const SIZE_FILTER_OPTIONS: TOptions = [
    {
        label: 'Small',
        value: 'sm',
    },
    {
        label: 'Medium',
        value: 'md',
    },
    {
        label: 'Large',
        value: 'lg',
    },
];

export const ACCORDION_TYPES: TOptions<{ iconPrefix: TIcon }> = [
    {
        label: 'Default',
        value: '',
        iconPrefix: null,
    },
    {
        label: 'With icon',
        value: '',
        iconPrefix: ICONS.Attention,
    },
];

export const BUTTON_PATTERNS: TOptions<{ value: TButtonPattern }> = [
    {
        label: 'Branded',
        value: 'branded',
    },
    {
        label: 'Common',
        value: 'common',
    },
    {
        label: 'Primary',
        value: 'primary',
    },
    {
        label: 'Secondary',
        value: 'secondary',
    },
    {
        label: 'Like link',
        value: 'like-link',
    },
    {
        label: 'Positive',
        value: 'positive',
    },
    {
        label: 'Warning',
        value: 'warning',
    },
    {
        label: 'Negative',
        value: 'negative',
    },
];

export const CHECKBOX_PATTERN_OPTIONS: TOptions<{ value: TCheckboxPattern }> = [
    {
        label: 'Common',
        value: 'common',
    },
    {
        label: 'Toggle',
        value: 'toggle',
    },
];

export const CHECKBOX_TYPES: TOptions<{ hint: string }> = Array.from({ length: 3 }).map((_, index) => ({
    label: 'Заголовок',
    value: '',
    hint: '',
    isDisabled: index === 2,
    ...(index === 1 && { hint: 'Подсказка' }),
}));

export const COMBOBOX_OPTIONS: TOptions = Array.from({ length: 6 }).map((_, index) => ({
    label: `Вариант ${index + 1}`,
    value: index + 1,
    ...((index === 3 || index === 4) && { description: 'Описание варианта' }),
    ...((index === 1 || index === 4) && { isDisabled: true }),
}));

export const COMBOBOX_TYPES: TOptions<{ isClearable: boolean, isSearchable: boolean, isCreatable: boolean }> = [
    {
        label: 'Default',
        value: '',
        isClearable: false,
        isSearchable: false,
        isCreatable: false,
    },
    {
        label: 'isClearable',
        value: '',
        isClearable: true,
        isSearchable: false,
        isCreatable: false,
    },
    {
        label: 'isSearchable',
        value: '',
        isClearable: false,
        isSearchable: true,
        isCreatable: false
    },
    {
        label: 'isCreatable',
        value: '',
        isClearable: false,
        isSearchable: false,
        isCreatable: true,
    },
];
