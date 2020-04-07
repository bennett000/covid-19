import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { InputNumber } from './number';

export default { component: InputNumber, title: 'Number' };

export const withoutDecimals = () => (
  <InputNumber onChange={action('change')} value={17.13} />
);

export const withDecimals = () => (
  <InputNumber onChange={action('change')} value={Math.PI} useDecimals={true} />
);

export const withPlaceholder = () => (
  <InputNumber
    onChange={action('change')}
    placeholder={'write stuff'}
    value={0}
  />
);
