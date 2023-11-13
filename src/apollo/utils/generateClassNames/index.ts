import cn from 'classnames';

import { IGenerateClassNamesParams } from './types';
import { TFunc } from '../../types';

export const generateCLassNames: TFunc<[IGenerateClassNamesParams], string> = ({
    block,
    elem = '',
    mods = {},
    className = '',
}) => {
    const element: string = elem
        ? `${block}__${elem}`
        : block;

    const allMods: string[] = [];

    const normalizeBooleanMods: TFunc<[string, string | boolean], string> = (modName, value) => {
        if (typeof value === 'boolean') {
            return value
                ? modName
                : undefined;
        }
        return value;
    };

    Object.entries(mods).forEach(([key, value]) => {
        const normalizedMods = normalizeBooleanMods(key, value);
        if (normalizedMods) {
            allMods.push(normalizedMods);
        }
    });

    return cn(
        element,
        allMods.filter(Boolean).map((mod) => `${element}_${mod}`),
        className,
    );
};