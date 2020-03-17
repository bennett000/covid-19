import { h } from 'preact';
import { Select } from '../components/select';
import { SelectMultiple } from '../components/select-multiple';
import { InputDate } from '../components/date';
import { Button } from '../components/button';
import { flex, flexCol, flexItem20 } from '../constants';
import {
  SelectOptionsWithIndex,
  ChartSeries,
  LineGraphState,
} from '../interfaces';

const dataSets = ['Active', 'Confirmed', 'Deaths', 'Recoveries'];
const modes = ['By date', 'By first confirmed', 'By first 100 confirmed'];
const scaleTypes = ['Linear', 'Logarithmic'];

export function LineGraphControls({
  countries,
  onChange,
  reload,
  state,
}: {
  countries: SelectOptionsWithIndex[];
  currentSeries: ChartSeries[];
  onChange: (lgs: LineGraphState) => any;
  reload: () => any;
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

  function selectCountries(countryIndexes: number[]) {
    onChange({
      ...state,
      countryIndexes,
    });
  }

  function selectScaleType(scaleType: number) {
    onChange({
      ...state,
      scaleType,
    });
  }

  return (
    <section className={`${flex} ${flexItem20}`}>
      <section className={flexCol}>
        <Select
          onChange={selectMode.bind(this)}
          options={modes}
          selected={state.mode}
        />
        <Select
          onChange={selectScaleType.bind(this)}
          options={scaleTypes}
          selected={state.scaleType}
        />
        <InputDate
          onChange={selectDate.bind(this)}
          ymdString={state.startDate}
        />
      </section>
      <SelectMultiple
        onChange={selectDataSets.bind(this)}
        options={dataSets}
        selected={state.dataSetIndexes}
      />
      <SelectMultiple
        onChange={selectCountries.bind(this)}
        options={countries}
        selected={state.countryIndexes}
      />
      <Button classes={['green']} label="Reload" onClick={reload}></Button>
    </section>
  );
}
