import {
    TFunc,
    TOption,
} from '../../apollo/types';
import { SIZE_FILTER_OPTIONS } from './constants';

export const getSizeOption: TFunc<[string], TOption> = (value) => SIZE_FILTER_OPTIONS
    .find((option) => option.value === value);
