import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { InputString } from './string';

export default { component: String, title: 'String' };

export const withLabel = () => (
  <InputString onChange={action('change')} value={'initial value'} />
);
