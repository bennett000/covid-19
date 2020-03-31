import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { InputDate } from './date';

export default { component: InputDate, title: 'Date' };

export const withValue = () => (
  <InputDate onChange={action('change')} ymdString="1955-11-05" />
);
