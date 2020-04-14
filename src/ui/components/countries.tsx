import { Fragment, h } from 'preact';
import { CountriesProps } from '../containers/countries/countries.state';
import { SelectMultipleFilter } from './input/select-multiple-filter';
import { highlight, styles } from '../style';
import { Select } from './input/select';

export function InputCountries(props: CountriesProps) {
  const showStatesString = props.strings.states;
  return (
    <Fragment>
      <Select
        classes={styles.selectBox}
        onChange={props.toggledShowStates}
        options={showStatesString}
        selected={props.showStates ? 1 : 0}
      />
      <SelectMultipleFilter
        classes={props.selected.length === 0 ? [highlight] : []}
        inputButtonClasses={styles.button}
        inputSelectClasses={styles.selectBox}
        inputStringClasses={styles.input}
        filter={props.filter}
        onUpdateFilter={props.updatedFilter}
        onChange={props.selectedCountry}
        onClear={props.clickedClear}
        onDeselect={props.selectedCountry as any}
        options={props.countries}
        selected={props.selected}
      />
    </Fragment>
  );
}
