import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { SelectMultiple } from './select-multiple';

export default { component: SelectMultiple, title: 'SelectMultiple' };

export const withNoOptions = () => (
  <SelectMultiple onChange={action('change')} options={[]} selected={[]} />
);

export const withOneStringOption = () => (
  <SelectMultiple onChange={action('change')} options={['foo']} selected={[]} />
);

export const withTwoStringOptions = () => (
  <SelectMultiple
    onChange={action('change')}
    options={['foo', 'bar']}
    selected={[]}
  />
);

export const withOneObjectOption = () => (
  <SelectMultiple
    onChange={action('change')}
    options={[{ name: 'foo', index: 7 }]}
    selected={[]}
  />
);

export const withTwoObjectOptions = () => (
  <SelectMultiple
    onChange={action('change')}
    options={[
      { name: 'foo', index: 7 },
      { name: 'bar', index: 11 },
    ]}
    selected={[]}
  />
);

export const withOneSelection = () => (
  <SelectMultiple
    onChange={action('change')}
    options={[
      { name: 'foo', index: 7 },
      { name: 'bar', index: 11 },
    ]}
    selected={[7]}
  />
);

export const withTwoSelections = () => (
  <SelectMultiple
    onChange={action('change')}
    options={[
      { name: 'foo', index: 7 },
      { name: 'bar', index: 11 },
      { name: 'baz', index: 99 },
    ]}
    selected={[7, 99]}
  />
);
