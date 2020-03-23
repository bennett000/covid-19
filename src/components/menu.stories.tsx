import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { Menu } from './menu';

export default { component: Menu, title: 'Menu' };

const config = {
  labels: ['One', 'Two', 'Three'],
  onClick: action('click'),
  selected: 1,
};

export const withSelected = () => <Menu config={config}></Menu>;
