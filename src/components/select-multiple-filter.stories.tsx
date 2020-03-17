import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { SelectMultipleFilter } from './select-multiple-filter';

export default {
  component: SelectMultipleFilter,
  title: 'SelectMultipleFilter',
};

const qbf =
  'The quick brown fox jumped over the lazy dog and everyone had fun tonight';

export const withFilter = () => (
  <SelectMultipleFilter
    onChange={action('change')}
    options={qbf.split(' ')}
    selected={[]}
  />
);
