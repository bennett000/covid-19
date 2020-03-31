import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { ButtonToggle } from './button-toggle';

export default { component: ButtonToggle, title: 'ButtonToggle' };

export const withLabelTrue = () => (
  <ButtonToggle
    labelTrue="True"
    labelFalse="False"
    onClick={action('click')}
    state={true}
  />
);

export const withLabelFalse = () => (
  <ButtonToggle
    labelTrue="True"
    labelFalse="False"
    onClick={action('click')}
    state={false}
  />
);
