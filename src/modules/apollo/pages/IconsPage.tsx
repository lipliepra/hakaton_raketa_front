import React, {
    FC,
    useEffect,
    useMemo,
} from 'react';
import { useSelector } from 'react-redux';

import { ICONS } from '../../../apollo/assets';
import { Checkbox } from '../../../apollo/components/Checkbox';
import { Combobox } from '../../../apollo/components/Combobox';
import { Tooltip } from '../../../apollo/components/Tooltip';
import {
    TOption,
    TSize,
} from '../../../apollo/types';
import { Panel } from '../../../common/components/Panel';
import { useActions } from '../../../common/hooks/useActions';
import { useParamsSelector } from '../../../common/hooks/useParamSelector';
import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { SIZE_FILTER_OPTIONS } from '../constants';
import { iconsActions } from '../redux/actions';
import {
    iconsDescriptionSelector,
    iconsFiltersFieldSelector,
} from '../redux/store/selectors';
import { IIconsFilters } from '../types';
import { getSizeOption } from '../utils';

const IconsPage: FC = () => {
    const description = useSelector(iconsDescriptionSelector);
    const filters = useParamsSelector(iconsFiltersFieldSelector);

    const {
        getIconsDescription,
        updateIconsFilter,
    } = useActions(iconsActions);

    useEffect(() => {
        getIconsDescription();
    }, []);

    const applyFilterHandler = (key: keyof IIconsFilters) => (value: boolean) => {
        updateIconsFilter({
            key,
            value,
        });
    };

    const applySizeFilterHandler = (option: TOption<{ value: TSize }>) => {
        updateIconsFilter({
            key: 'size',
            value: option.value,
        });
    };

    return (
        <Container
            title='Apollo - Иконки'
            description={description}
        >
            <div className='apollo-module__icons'>
                <Panel className='apollo-module__icons-filters'>
                    <h2 className='apollo-module__panel-title'>Фильтры</h2>

                    <div className='apollo-module__icons-filters_content'>
                        <div className='apollo-module__icons-filters_item'>
                            <span className='apollo-module__icons-filters_label'>isActive</span>

                            <Checkbox
                                pattern='toggle'
                                value={filters.isActive}
                                onChange={applyFilterHandler('isActive')}
                                label=''
                                dataTestId=''
                            />
                        </div>

                        <div className='apollo-module__icons-filters_item'>
                            <span className='apollo-module__icons-filters_label'>isLoading</span>

                            <Checkbox
                                pattern='toggle'
                                value={filters.isLoading}
                                onChange={applyFilterHandler('isLoading')}
                                label=''
                                dataTestId=''
                            />
                        </div>

                        <div className='apollo-module__icons-filters_item'>
                            <span className='apollo-module__icons-filters_label'>Size</span>

                            <Combobox
                                value={getSizeOption(filters.size)}
                                options={SIZE_FILTER_OPTIONS}
                                onChange={applySizeFilterHandler}
                                isFullWidth
                                dataTestId=''
                            />
                        </div>
                    </div>
                </Panel>

                <Panel className='apollo-module__icons-elements'>
                    {Object.entries(ICONS).map(([title, value]) => (
                        <Tooltip
                            key={title}
                            content={title}
                            dataTestId=''
                        >
                            <Icon
                                icon={value}
                                isActive={filters.isActive}
                                isLoading={filters.isLoading}
                                size={filters.size}
                            />
                        </Tooltip>
                    ))}
                </Panel>
            </div>
        </Container>
    );
};

export default IconsPage;
