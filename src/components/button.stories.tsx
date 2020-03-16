import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { Button } from './button';

export default { component: Button, title: 'Button' };

export const withLabel = () => (
  <Button label={'Click Me'} onClick={action('click')} />
);

export const withDisabled = () => (
  <Button isDisabled={true} label={'Click Me'} onClick={action('click')} />
);
