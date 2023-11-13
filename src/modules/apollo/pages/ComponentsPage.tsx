import React, {
    FC,
    useEffect,
    useState,
} from 'react';
import { useSelector } from 'react-redux';

import { ICONS } from '../../../apollo/assets';
import { Accordion } from '../../../apollo/components/Accordion';
import { Button } from '../../../apollo/components/Button';
import { Checkbox } from '../../../apollo/components/Checkbox';
import { Combobox } from '../../../apollo/components/Combobox';
import { ControlWrapper } from '../../../apollo/components/ControlWrapper';
import { Radio } from '../../../apollo/components/Radio';
import { NOOP } from '../../../apollo/constants';
import { TOption } from '../../../apollo/types';
import { Panel } from '../../../common/components/Panel';
import { useActions } from '../../../common/hooks/useActions';
import { Container } from '../components/Container';
import { ComponentsFilters } from '../components/filters/ComponentsFilters';
import { CheckboxesFilters } from '../components/filters/CheckboxesFilters';
import {
    ACCORDION_DESCRIPTION,
    ACCORDION_TITLE,
    ACCORDION_TYPES,
    BUTTON_PATTERNS,
    CHECKBOX_TYPES,
    COMBOBOX_OPTIONS,
    COMBOBOX_TYPES,
    RADIO_OPTIONS,
} from '../constants';
import { componentsActions } from '../redux/actions';
import {
    componentsButtonsFiltersSelector,
    componentsCheckboxesFiltersSelector,
    componentsDescriptionSelector,
} from '../redux/store/selectors';

const ComponentsPage: FC = () => {
    const dataTestId = 'apolloModuleComponents';

    const description = useSelector(componentsDescriptionSelector);
    const buttonsFilter = useSelector(componentsButtonsFiltersSelector);
    const checkboxesFilter = useSelector(componentsCheckboxesFiltersSelector);

    const { getComponentsDescription } = useActions(componentsActions);

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [comboboxValue, setComboboxValue] = useState<TOption>(null);
    const [radioValue, setRadioValue] = useState<string>('1');

    useEffect(() => {
        getComponentsDescription();
    }, []);

    return (
        <Container
            title='Apollo - Компоненты'
            description={description}
        >
            <Panel className='apollo-module__panel'>
                <h2 className='apollo-module__panel-title'>Accordion</h2>

                <div className='apollo-module__components-accordions'>
                    {ACCORDION_TYPES.map((item, index) => (
                        <ControlWrapper
                            key={item.label}
                            label={item.label}
                            id=''
                            dataTestId={`${dataTestId}Accordion${index}`}
                        >
                            <Accordion
                                title={ACCORDION_TITLE}
                                description={ACCORDION_DESCRIPTION}
                                iconPrefix={item.iconPrefix}
                                dataTestId={`${dataTestId}${index}`}
                            />
                        </ControlWrapper>
                    ))}
                </div>
            </Panel>

            <Panel className='apollo-module__panel'>
                <h2 className='apollo-module__panel-title'>Button</h2>

                <ComponentsFilters />

                <div className='apollo-module__components-buttons'>
                    {BUTTON_PATTERNS.map((item, index) => (
                        <ControlWrapper
                            key={item.label}
                            label={item.label}
                            id={item.label}
                            dataTestId={`${dataTestId}Button${index}`}
                        >
                            <Button
                                content='Заголовок'
                                pattern={item.value}
                                dataTestId={`${dataTestId}${index}`}
                                isFullWidth
                                size='lg'
                                isDisabled={buttonsFilter.isDisabled}
                                isLoading={buttonsFilter.isLoading}
                                isShowLoaderIcon={buttonsFilter.isLoading}
                                iconPrefix={buttonsFilter.withIconPrefix && ICONS.Info}
                                iconPostfix={buttonsFilter.withIconPostfix && ICONS.Plus}
                                onClick={NOOP}
                            />
                        </ControlWrapper>
                    ))}
                </div>
            </Panel>

            <Panel className='apollo-module__panel'>
                <h2 className='apollo-module__panel-title'>Checkbox</h2>

                <CheckboxesFilters />

                <div className='apollo-module__components-checkboxes'>
                    {CHECKBOX_TYPES.map((item, index) => (
                        <ControlWrapper
                            key={index}
                            label=''
                            id={item.label}
                            dataTestId={`${dataTestId}Checkbox${index}`}
                        >
                            <Checkbox
                                pattern={checkboxesFilter.pattern}
                                value={isChecked}
                                onChange={(v) => setIsChecked(v)}
                                label={item.label}
                                hint={item.hint}
                                isDisabled={item.isDisabled}
                                dataTestId={`${dataTestId}${index}`}
                            />
                        </ControlWrapper>
                    ))}
                </div>
            </Panel>

            <Panel className='apollo-module__panel'>
                <h2 className='apollo-module__panel-title'>Combobox</h2>

                <div className='apollo-module__components-combobox'>
                    {COMBOBOX_TYPES.map((item, index) => (
                        <ControlWrapper
                            key={index}
                            label={item.label}
                            id={item.label}
                            dataTestId={`${dataTestId}Combobox${index}`}
                        >
                            <Combobox
                                value={comboboxValue}
                                onChange={(v: TOption) => setComboboxValue(v)}
                                options={COMBOBOX_OPTIONS}
                                isFullWidth
                                isClearable={item.isClearable}
                                isSearchable={item.isSearchable}
                                isCreatable={item.isCreatable}
                                dataTestId={`${dataTestId}${index}`}
                            />
                        </ControlWrapper>
                    ))}
                </div>
            </Panel>

            <Panel className='apollo-module__panel'>
                <h2 className='apollo-module__panel-title'>Radio</h2>

                <div className='apollo-module__components-radio'>
                    <h3 className='apollo-module__components-radio_title'>Vertical</h3>

                    <Radio
                        value={radioValue}
                        onChange={(val) => setRadioValue(val)}
                        options={RADIO_OPTIONS}
                        dataTestId=''
                    />

                    <h3 className='apollo-module__components-radio_title'>Horizontal</h3>

                    <Radio
                        pattern='horizontal'
                        value={radioValue}
                        onChange={(val) => setRadioValue(val)}
                        options={RADIO_OPTIONS}
                        dataTestId=''
                    />

                    <h3 className='apollo-module__components-radio_title'>Tabs</h3>

                    <Radio
                        pattern='tabs'
                        value={radioValue}
                        isFullWidth
                        onChange={(val) => setRadioValue(val)}
                        options={RADIO_OPTIONS}
                        dataTestId=''
                    />
                </div>
            </Panel>
        </Container>
    );
};

export default ComponentsPage;

//     const [bottomSheet, setBottomSheet] = useState(false);
//
//     const multiplePhotos = [
//         'https://cs11.livemaster.ru/storage/topic/NxN/48/72/51ca01280af65e4ef909ed524902f4cfaf44vc.jpg?h=YsmDTRGuAl-rn9pK1vTgCA',
//         'https://animals.pibig.info/uploads/posts/2023-04/1681398740_animals-pibig-info-p-koti-s-okrasom-leoparda-zhivotnie-instagra-70.jpg',
//         'https://wl-adme.cf.tsp.li/resize/728x/jpg/439/eb8/de445355578c3bb458152d1740.jpg',
//     ];
//
//     const [photoIndex, setPhotoIndex] = useState<number>(null);
//
//     return (
//         <div className='container'>
//             <Panel>
//                 <h2>BottomSheet</h2>
//
//                 <Button
//                     content={'Открыть'}
//                     pattern='primary'
//                     dataTestId={''}
//                     isFullWidth
//                     onClick={() => setBottomSheet(true)}
//                 />
//
//                 <BottomSheet
//                     isShow={bottomSheet}
//                     setIsShow={(v) => setBottomSheet(v)}
//                     dataTestId=''
//                 >
//                     Заголовок
//                 </BottomSheet>
//             </Panel>
//
//             <Panel>
//                 <h2>Images / PhotoViewer</h2>
//
//                 <div className='images'>
//                     {multiplePhotos.map((image, idx) => (
//                         <Image
//                             key={idx}
//                             className='image'
//                             src={image}
//                             withExpandButton={idx === 0}
//                             withPhotoButton={idx !== 0}
//                             onClick={() => setPhotoIndex(idx)}
//                         />
//                     ))}
//                 </div>
//
//                 <PhotoViewer
//                     photos={multiplePhotos}
//                     startIndex={photoIndex}
//                     onClose={() => setPhotoIndex(null)}
//                     dataTestId=''
//                 />
//             </Panel>
//
//             <Panel>
//                 <h2>TextEditor / ControlWrapper / Hint / Tooltip</h2>
//
//                 <ControlWrapper
//                     label='Заголовок'
//                     id='id-1'
//                     dataTestId=''
//                     isRequired
//                     errorMessage='Ошибка в форме'
//                     hint='Заголовок'
//                 >
//                     <TextEditor
//                         value={'text'}
//                         onChange={NOOP}
//                     />
//                 </ControlWrapper>
//             </Panel>
//         </div>
//     );
// };