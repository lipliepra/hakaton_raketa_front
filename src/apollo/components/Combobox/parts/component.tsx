import React, {
    useState,
    useEffect,
    useCallback,
    useMemo,
    Fragment,
} from 'react';
import debounce from 'lodash/debounce';
import Select, { MenuProps } from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import {
    CommonProps,
    GroupTypeBase,
} from 'react-select/src/types';
import { StylesConfig } from 'react-select/src/styles';

import { IndicatorsContainer } from './IndicatorContainer';
import { ClearIndicator } from './ClearIndicator';
import { DropdownIndicator } from './DropdownIndicator';
import { LoadingIndicator } from './LoadingIndicator';
import { MenuList } from './MenuList';
import { Control } from './Control';
import { NoOptionsMessage } from './NoOptionsMessage';
import { Option } from './Option';
import { NOOP } from '../../../constants';
import { VALUE_LENGTH_BEFORE_SEARCH } from '../constants';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { checkingOption } from '../utils';
import {
    TFunc,
    TNullable,
    TOption,
    TOptions,
    TSearchOptions,
} from '../../../types';
import { IComboboxProps } from '../types';

const ComboboxComponent: React.FC<IComboboxProps> = (props) => {
    const {
        hasError,
        value,
        className,
        isAsync,
        isCreatable,
        searchOptions,
        options = [],
        onChange = NOOP,
        noOptionsMessage = '',
        nothingFoundMessage = '',
        isFullWidth,
        isMulti,
        onInput = NOOP,
        defaultOptions = [],
        isClearable,
        id,
        placeholder = '',
        reactRef,
    } = props;

    const [inputValue, setInputValue] = useState('');

    useEffect(() => () => {
        setInputValue('');
    }, []);

    const generatedCls = generateCLassNames({
        block: 'apollo-combobox',
        mods: {
            'has-error': hasError,
            'async': isAsync,
            'full-width': isFullWidth,
            'multi': isMulti,
            // 'multi-input': isMultiInput,
        },
        className,
    });

    const onInputHandler = (_value: string) => {
        if (_value === inputValue) return;

        setInputValue(_value);

        if (onInput) onInput(_value);
    };

    const getOptions: TSearchOptions = (val, callback) => {
        const optionsValue = val.trim();
        const isNotValidLength = optionsValue.length < VALUE_LENGTH_BEFORE_SEARCH;

        if (isNotValidLength) return callback([]);

        const callbackWrapper = (_options: TOptions) => {

            return callback(_options);
        };

        if (searchOptions) {
            searchOptions(optionsValue, callbackWrapper);
            return;
        }

        callback([]);
    };

    const findOption: TFunc<[TOption | string], TNullable<TOption>> = (val) => {
        if (!val || !options.length) return null;

        return options.find((option) => option?.value === ((typeof val !== 'string' && val?.value) || val)) || null;
    };

    const getNoOptionsMessage = () => (inputValue.length > VALUE_LENGTH_BEFORE_SEARCH - 1
        ? nothingFoundMessage
        : noOptionsMessage);

    const filterOptions = (option: TOption, input: string) => {
        const { label } = option || {};

        return checkingOption(label as string, input);
    };

    const isValue = useMemo(() => !!(isMulti && Array.isArray(value)
        ? value.length
        : value), [
        value,
        isMulti,
    ]);

    const isAllValuesSelected = useMemo(() => (
        isMulti && !isAsync && Array.isArray(value) && options!.length === value.length
    ), [
        value,
        isMulti,
        options,
    ]);

    const clearIndicator = useCallback((_styles: StylesConfig<TOption, true>, _props: CommonProps<TOption, true>) => (
        isClearable && !_props.selectProps.isLoading && isValue
            ? {}
            : { display: 'none' }
    ), [
        isClearable,
        value,
    ]);

    const dropdownIndicator = useCallback((_styles: StylesConfig<TOption, true>, _props: CommonProps<TOption, true>) => {
        const { isLoading } = _props.selectProps;

        return isLoading || (isClearable && isValue) || isAllValuesSelected
            ? ({ display: 'none' })
            : ({});
    }, [
        isClearable,
        isValue,
    ]);

    const overriddenStyles = {
        container: () => ({}),
        control: () => ({}),
        dropdownIndicator,
        clearIndicator,
        indicatorsContainer: () => ({}),
        indicatorSeparator: () => ({}),
        menuPortal: () => ({}),
        multiValueLabel: () => ({}),
        option: () => ({}),
        menu: (_styles: any, _props: MenuProps<TOption, false, GroupTypeBase<TOption>>) => {
            const { isLoading } = _props.selectProps;

            return isLoading || isAllValuesSelected
                ? { display: 'none' }
                : {};
        },
        group: () => ({}),
        input: () => ({ width: '100%' }),
        loadingIndicator: () => ({}),
        loadingMessage: () => ({ display: 'none' }),
        menuList: () => ({}),
        noOptionsMessage: () => ({}),
        placeholder: () => ({}),
        singleValue: () => ({}),
        valueContainer: () => ({}),
    };

    const onInputEvent = (event: Event) => {
        const elem = event.target as HTMLInputElement;
        const _inputValue = elem.value;

        setInputValue('');
        if (!_inputValue) return;

        const newValue = [...((Array.isArray(value) && value) || [])];

        const isInputFoundInValue = !!newValue.find((val) => val.value === _inputValue);

        if (!isInputFoundInValue) {
            newValue.push({
                value: _inputValue,
                label: _inputValue,
            });
        }
        if (onChange) onChange(newValue);

        elem.value = '';
    };

    // isMultiInput в условии
    const multiInputProps = useMemo(() => (isMulti
        ? {
            isMulti: true,
            hideSelectedOptions: true,
            ref: reactRef,
            components: {
                ...(options?.length
                    ? {
                        Option,
                        MenuList,
                        NoOptionsMessage,
                        DropdownIndicator,
                    }
                    : {
                        Option: () => '',
                        MenuList: () => '',
                        NoOptionsMessage: () => '',
                        DropdownIndicator: () => '',
                    }),
                Control,
                LoadingIndicator,
                IndicatorsContainer,
            },
            onKeyDown: (event: KeyboardEvent) => {
                if (event.key === 'Enter') {
                    onInputEvent(event);
                }
            },
            onBlur: onInputEvent,
        }
        : {}), [isMulti]);

    const singleProps = {
        ...props,
        value,
        styles: overriddenStyles,
        inputId: id,
        valueKey: 'id',
        labelKey: 'name',
        placeholder: placeholder,
        className: generatedCls,
        components: {
            Control,
            Option,
            MenuList,
            NoOptionsMessage,
            DropdownIndicator,
            ClearIndicator,
            LoadingIndicator,
            IndicatorsContainer,
        },
        classNamePrefix: 'apollo-combobox',
        noOptionsMessage: getNoOptionsMessage,
        ref: reactRef,
        ...multiInputProps,
    };

    const renderAsync = () => {
        const asyncProps: any = {
            loadOptions: debounce(getOptions, 300),
            onInputChange: debounce(onInputHandler, 300),
            defaultOptions,
        };

        return (
            <Fragment>
                {React.createElement(AsyncSelect, {
                    ...singleProps,
                    ...asyncProps,
                })}
            </Fragment>
        );
    };

    const renderCreatable = () => {
        const creatableProps: any = { onInputChange: onInputHandler };

        return (
            <Fragment>
                {React.createElement(CreatableSelect, {
                    ...singleProps,
                    ...creatableProps,
                })}
            </Fragment>
        );
    };

    const renderDefault = () => {
        const selectProps: any = {
            value: Array.isArray(value)
                ? value
                : findOption(value),
            onInputChange: onInputHandler,
            filterOption: filterOptions,
        };

        return (
            <Fragment>
                {React.createElement(Select, {
                    ...singleProps,
                    ...selectProps,
                })}
            </Fragment>
        );
    };

    if (isAsync) return renderAsync();

    if (isCreatable) return renderCreatable();

    return renderDefault();
};

export default ComboboxComponent;
