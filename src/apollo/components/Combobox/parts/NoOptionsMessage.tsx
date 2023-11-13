import { components } from 'react-select';
import { NoticeProps } from 'react-select/src/components/Menu';
import { GroupTypeBase } from 'react-select/src/types';

import { TOption } from '../../../types';

export const NoOptionsMessage = (props: NoticeProps<TOption, boolean, GroupTypeBase<TOption>>) => {
  const {
    children,
    selectProps,
  } = props;

  const { size = 'md' } = selectProps;

  return components.NoOptionsMessage({
    ...props,
    className: `apollo-combobox__menu-notice--no-options_${size}`,
    children,
  });
};
