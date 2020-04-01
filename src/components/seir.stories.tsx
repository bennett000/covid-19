import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { InputSeir } from './seir';
import { defaultLanguage as strings } from '../i18n';

export default { component: InputSeir, title: 'InputSeir' };

export const withData = () => (
  <InputSeir
    onChange={action('change')}
    state={{
      daysToProject: 5,
      r0: 2.2,
      incubationPeriod: 1,
      durationOfInfection: 1,
      fatalityRate: 1,
      timeFromIncubationToDeath: 1,
      lengthOfSevereHospitalStay: 1,
      recoveryTimeForMildCases: 1,
      hospitalizationRate: 1,
      timeFromIncubationToHospital: 1,
    }}
    strings={strings}
  />
);
