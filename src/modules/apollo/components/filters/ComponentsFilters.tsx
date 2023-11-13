import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Checkbox } from '../../../../apollo/components/Checkbox';
import { ControlWrapper } from '../../../../apollo/components/ControlWrapper';
import { useActions } from '../../../../common/hooks/useActions';
import { componentsActions } from '../../redux/actions';
import { componentsButtonsFiltersSelector } from '../../redux/store/selectors';
import { IComponentsFilterUpdate } from '../../types';

export const ComponentsFilters: FC = () => {
    const buttonsFilter = useSelector(componentsButtonsFiltersSelector);

    const { updateComponentsFilter } = useActions(componentsActions);

    const updateFilterHandler = (filterName: IComponentsFilterUpdate['filterName']) => (value: boolean) => {
        updateComponentsFilter({
            component: 'buttons',
            filterName,
            value,
        });
    };

    return (
        <div className='apollo-module__panel-filters'>
            <h3 className='apollo-module__panel-filters_title'>Фильтры</h3>

            <div className='apollo-module__panel-filters_content'>
                <ControlWrapper
                    label='isDisabled'
                    id=''
                    dataTestId=''
                >
                    <Checkbox
                        pattern='toggle'
                        value={buttonsFilter.isDisabled}
                        onChange={updateFilterHandler('isDisabled')}
                        label=''
                        dataTestId=''
                    />
                </ControlWrapper>

                <ControlWrapper
                    label='isLoading'
                    id=''
                    dataTestId=''
                >
                    <Checkbox
                        pattern='toggle'
                        value={buttonsFilter.isLoading}
                        onChange={updateFilterHandler('isLoading')}
                        label=''
                        dataTestId=''
                    />
                </ControlWrapper>

                <ControlWrapper
                    label='WithIconPrefix'
                    id=''
                    dataTestId=''
                >
                    <Checkbox
                        pattern='toggle'
                        value={buttonsFilter.withIconPrefix}
                        onChange={updateFilterHandler('withIconPrefix')}
                        label=''
                        dataTestId=''
                    />
                </ControlWrapper>

                <ControlWrapper
                    label='WithIconPostfix'
                    id=''
                    dataTestId=''
                >
                    <Checkbox
                        pattern='toggle'
                        value={buttonsFilter.withIconPostfix}
                        onChange={updateFilterHandler('withIconPostfix')}
                        label=''
                        dataTestId=''
                    />
                </ControlWrapper>
            </div>
        </div>
    );
};
