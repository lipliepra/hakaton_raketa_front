export const prepareOptions = <T extends Record<string, never>>(
    payload: Array<T>,
    valueField = 'id' as keyof T,
    labelField = 'name' as keyof T,
) => (
    payload.map((option) => ({
        value: String(option[valueField]),
        label: String(option[labelField]),
    }))
);
