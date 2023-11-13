import React, {
    FC,
    useMemo,
} from 'react';
import { useSelector } from 'react-redux';

import { Combobox } from '../../../../apollo/components/Combobox';
import { ControlWrapper } from '../../../../apollo/components/ControlWrapper';
import { TOption } from '../../../../apollo/types';
import { useActions } from '../../../../common/hooks/useActions';
import { capitalizeFirstLetter } from '../../../../common/utils/capitalizeFirstLetter';
import { CHECKBOX_PATTERN_OPTIONS } from '../../constants';
import { componentsActions } from '../../redux/actions';
import { componentsCheckboxesFiltersSelector } from '../../redux/store/selectors';
import { TCheckboxPattern } from '../../types';

export const CheckboxesFilters: FC = () => {
    const checkboxesFilter = useSelector(componentsCheckboxesFiltersSelector);

    const { updateComponentsFilter } = useActions(componentsActions);

    const updateFilterHandler = (value: TOption<{ value: TCheckboxPattern }>) => {
        updateComponentsFilter({
            component: 'checkboxes',
            filterName: 'pattern',
            value: value.value,
        });
    };

    const patternOption = useMemo(() => ({
        label: capitalizeFirstLetter(checkboxesFilter.pattern),
        value: checkboxesFilter.pattern,
    }), [checkboxesFilter.pattern]);

    return (
        <div className='apollo-module__panel-filters'>
            <h3 className='apollo-module__panel-filters_title'>Фильтры</h3>

            <div className='apollo-module__panel-filters_content'>
                <ControlWrapper
                    label='Pattern'
                    id=''
                    dataTestId=''
                >
                    <Combobox
                        value={patternOption}
                        options={CHECKBOX_PATTERN_OPTIONS}
                        onChange={updateFilterHandler}
                        isFullWidth
                        dataTestId=''
                    />
                </ControlWrapper>
            </div>
        </div>
    );
};
