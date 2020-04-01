import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { AboutList } from './about-list';

export default { component: AboutList, title: 'AboutList' };

export const simpleList = () => (
  <AboutList
    title="My List"
    list={[
      { name: 'Foo', description: 'placeholder word used by developers ' },
      {
        name: 'Bar',
        description: () => (
          <code>
            placeholder word used by <em>some</em> developers
          </code>
        ),
      },
    ]}
  />
);
