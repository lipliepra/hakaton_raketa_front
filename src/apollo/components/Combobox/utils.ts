import { TLabel } from './types';

export const checkingOption = (label: TLabel, input: string) => {
    return String(label).toLowerCase().includes(input.toLowerCase());
};
