import { h } from 'preact';
import { action, actions } from '@storybook/addon-actions';
import { SelectMultipleFilter } from './select-multiple-filter';

export default {
  component: SelectMultipleFilter,
  title: 'SelectMultipleFilter',
};

const qbf =
  'The quick brown fox jumped over the lazy dog and everyone had fun tonight';

export const withFilter = () => (
  <SelectMultipleFilter
    filter=""
    onChange={action('change')}
    onClear={action('clear')}
    onUpdateFilter={action('update-filter')}
    onDeselect={action('deselect')}
    options={qbf.split(' ')}
    selected={[]}
  />
);
