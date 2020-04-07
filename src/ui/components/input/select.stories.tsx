import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { Select } from './select';

export default { component: Select, title: 'Select' };

export const withNoOptions = () => (
  <Select onChange={action('change')} options={[]} selected={-1} />
);

export const withOneStringOption = () => (
  <Select onChange={action('change')} options={['foo']} selected={-1} />
);

export const withTwoStringOptions = () => (
  <Select onChange={action('change')} options={['foo', 'bar']} selected={-1} />
);

export const withOneObjectOption = () => (
  <Select
    onChange={action('change')}
    options={[{ name: 'foo', index: 7 }]}
    selected={-1}
  />
);

export const withTwoObjectOptions = () => (
  <Select
    onChange={action('change')}
    options={[
      { name: 'foo', index: 7 },
      { name: 'bar', index: 11 },
    ]}
    selected={-1}
  />
);

export const withSelection = () => (
  <Select onChange={action('change')} options={['foo', 'bar']} selected={1} />
);
