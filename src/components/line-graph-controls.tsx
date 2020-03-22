import { h } from 'preact';
import { Select } from '../components/select';
import { SelectMultiple } from '../components/select-multiple';
import { InputDate } from '../components/date';
import { Button } from '../components/button';
import {
  flex,
  flexCol,
  flexItem20,
  totalString,
  highlight,
} from '../constants';
import {
  SelectOptionsWithIndex,
  ChartSeries,
  LineGraphState,
} from '../interfaces';
import { SelectMultipleFilter } from './select-multiple-filter';
import { noop } from '@ch1/utility';

const dataSets = [
  'Active',
  'Confirmed',
  'Deaths',
  'Recoveries',
  'Projection: By Reverse Death',
];
const modes = ['By date', 'By first confirmed', 'By first 100 confirmed'];
const scaleTypes = ['Linear', 'Logarithmic'];
const showStates = ['Show States', 'Hide States'];
const metrics = ['By Value', 'Percent'];

export function LineGraphControls({
  countries,
  onChange,
  reload,
  state,
}: {
  clearCountries: () => any;
  countries: SelectOptionsWithIndex[];
  countryIndexes: number[];
  currentSeries: ChartSeries[];
  onChange: (lgs: LineGraphState) => any;
  onUpdateCountryFilter: (filter: string) => any;
  reload: () => any;
  selectCountry: (country: number) => any;
  state: LineGraphState;
}) {
  function selectMode(mode: number) {
    onChange({
      ...state,
      mode,
    });
  }

  function selectDate(ymdString: string) {
    onChange({
      ...state,
      startDate: ymdString,
    });
  }

  function selectDataSets(dataSetIndexes: number[]) {
    onChange({
      ...state,
      dataSetIndexes,
    });
  }

  function selectScaleType(scaleType: number) {
    onChange({
      ...state,
      scaleType,
    });
  }

  function selectShowStates(showOrHide: number) {
    onChange({
      ...state,
      showStates: showOrHide === 0 ? false : true,
    });
  }

  function selectMetric(metric: number) {
    onChange({
      ...state,
      byMetric: metric,
    });
  }

  return (
    <section className={`${flex} ${flexItem20}`}>
      <section className={flexCol}>
        <Select onChange={selectMode} options={modes} selected={state.mode} />
        <Select
          onChange={selectScaleType}
          options={scaleTypes}
          selected={state.scaleType}
        />
        <InputDate onChange={selectDate} ymdString={state.startDate} />
      </section>
      <SelectMultiple
        onChange={selectDataSets}
        options={dataSets}
        selected={state.dataSetIndexes}
      />
      <SelectMultipleFilter
        classes={this.props.countryIndexes.length === 0 ? [highlight] : []}
        filter={this.props.state.countryFilter}
        onUpdateFilter={this.props.onUpdateCountryFilter}
        onChange={noop as any}
        onClear={this.props.clearCountries}
        onDeselect={this.props.selectCountry}
        options={countries.filter(filterStates(this.props.state.showStates))}
        selected={this.props.countryIndexes}
      />
      <div className={flexCol}>
        <Select
          onChange={selectShowStates}
          options={showStates}
          selected={state.showStates ? 1 : 0}
        />
        <Select
          onChange={selectMetric}
          options={metrics}
          selected={state.byMetric}
        />
        <Button label="Reload" onClick={reload}></Button>
      </div>
    </section>
  );
}

function filterStates(doFilter: boolean) {
  return (item: SelectOptionsWithIndex) => {
    if (doFilter === false) {
      return true;
    }
    if (item.name.indexOf(',') > -1) {
      if (item.name.indexOf(`, ${totalString}`) > -1) {
        return true;
      }
      return false;
    }
    return true;
  };
}
