import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import { InputSeir } from './seir';
import { defaultLanguage as strings } from '../../i18n';

export default { component: InputSeir, title: 'InputSeir' };

export const withData = () => (
  <InputSeir
    daysToProject={5}
    r0={2.2}
    incubationPeriod={1}
    durationOfInfection={1}
    fatalityRate={1}
    timeFromIncubationToDeath={1}
    lengthOfSevereHospitalStay={1}
    recoveryTimeForMildCases={1}
    hospitalizationRate={1}
    timeFromIncubationToHospital={1}
    updatedDaysToProject={action('updated days to project') as any}
    updatedR0={action('updated r0') as any}
    updatedIncubationPeriod={action('updated incubation') as any}
    updatedDurationOfInfection={action('updated duration') as any}
    updatedFatalityRate={action('updated fatality') as any}
    updatedTimeFromIncubationToDeath={action('updated incubation') as any}
    updatedLengthOfSevereHospitalStay={
      action('updated severe hospital stay') as any
    }
    updatedRecoveryTimeForMildCases={
      action('updated recovery time for mild cases') as any
    }
    updatedHospitalizationRate={action('updated hospitalization rate') as any}
    updatedTimeFromIncubationToHospital={
      action('updated time from incubation to hospital') as any
    }
    strings={strings}
  />
);
