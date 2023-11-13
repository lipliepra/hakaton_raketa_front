import { isString } from 'lodash';
import { TFunc } from '../../apollo/types';

export const capitalizeFirstLetter: TFunc<[string], string> = (value) => isString(value) && value.length
    ? value.charAt(0).toUpperCase() + value.slice(1)
    : '';
