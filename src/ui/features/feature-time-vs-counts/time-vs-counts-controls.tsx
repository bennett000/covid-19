import { h } from 'preact';
import { Select } from '../../components/input/select';
import { SelectMultiple } from '../../components/input/select-multiple';
import { InputDate } from '../../components/input/date';
import { Button } from '../../components/input/button';
import { flex, flexCol, flexItem20, highlight, styles } from '../../style';
import {
  SelectOptionsWithIndex,
  ChartSeries,
  TimeVsCountsState,
} from '../../../interfaces';
import { SelectMultipleFilter } from '../../components/input/select-multiple-filter';
import { Strings } from '../../../i18n';
import { filterStates } from '../../../utility';

export function TimeVsCountsControls({
  clearCountries,
  countries,
  countryKeys,
  onChange,
  onConfigureSeir,
  onUpdateCountryFilter,
  reload,
  selectCountry,
  selectCountries,
  state,
  strings,
}: {
  clearCountries: () => any;
  countries: SelectOptionsWithIndex[];
  countryKeys: string[];
  currentSeries: ChartSeries[];
  onChange: (lgs: TimeVsCountsState) => any;
  onConfigureSeir: () => any;
  onUpdateCountryFilter: (filter: string) => any;
  reload: () => any;
  selectCountry: (country: string) => any;
  selectCountries: (countries: string[]) => any;
  state: TimeVsCountsState;
  strings: Strings;
}) {
  const dataSets = [
    strings.series.activeCases,
    strings.series.confirmedCases,
    strings.series.deaths,
    strings.series.recoveries,
    strings.series.newConfirmed,
    strings.series.newDeaths,
    strings.series.estimatedActiveCases,
    strings.series.projectionSeirActive,
    strings.series.projectionSeirDeaths,
    strings.series.projectionSeirRecoveries,
  ];
  const modes = [
    strings.modes.byDate,
    strings.modes.byFirst,
    strings.modes.byFirst100,
  ];
  const scaleTypes = [
    strings.scaleTypes.linear,
    strings.scaleTypes.logarithmic,
  ];
  const showStates = strings.states;
  const metrics = [strings.metrics.byValue, strings.metrics.byPercent];

  function selectMode(mode: number | string) {
    onChange({
      ...state,
      mode: parseInt(mode + '', 10),
    });
  }

  function selectDate(ymdString: string) {
    onChange({
      ...state,
      startDate: ymdString,
    });
  }

  function selectDataSets(dataSetIndexes: any[]) {
    onChange({
      ...state,
      dataSetIndexes: dataSetIndexes.map(d => parseInt(d + '', 10)),
    });
  }

  function selectScaleType(scaleType: number | string) {
    onChange({
      ...state,
      scaleType: parseInt(scaleType + '', 10),
    });
  }

  function selectShowStates(showOrHide: number | string) {
    onChange({
      ...state,
      showStates: parseInt(showOrHide + '', 10) === 0 ? false : true,
    });
  }

  function selectMetric(metric: number | string) {
    onChange({
      ...state,
      byMetric: parseInt(metric + '', 10),
    });
  }

  return (
    <section className={`${flex} ${flexItem20}`}>
      <section className={flexCol}>
        <Select
          classes={styles.selectBox}
          onChange={selectMode}
          options={modes}
          selected={state.mode}
        />
        <Select
          classes={styles.selectBox}
          onChange={selectScaleType}
          options={scaleTypes}
          selected={state.scaleType}
        />
        <InputDate
          classes={styles.input}
          onChange={selectDate}
          ymdString={state.startDate}
        />
        <Button
          classes={styles.button}
          label={strings.timeVsCounts.configureSeir}
          onClick={onConfigureSeir}
        />
      </section>
      <SelectMultiple
        classes={styles.selectBox}
        onChange={selectDataSets}
        options={dataSets}
        selected={state.dataSetIndexes}
      />
      <SelectMultipleFilter
        classes={countryKeys.length === 0 ? [highlight] : []}
        inputButtonClasses={styles.button}
        inputSelectClasses={styles.selectBox}
        inputStringClasses={styles.input}
        filter={state.countryFilter}
        onUpdateFilter={onUpdateCountryFilter}
        onChange={selectCountries}
        onClear={clearCountries}
        onDeselect={selectCountry}
        options={countries.filter(filterStates(state.showStates, strings))}
        selected={countryKeys}
      />
      <div className={flexCol}>
        <Select
          classes={styles.selectBox}
          onChange={selectShowStates}
          options={showStates}
          selected={state.showStates ? 1 : 0}
        />
        <Select
          classes={styles.selectBox}
          onChange={selectMetric}
          options={metrics}
          selected={state.byMetric}
        />
        <Button
          classes={styles.button}
          label={strings.timeVsCounts.reload}
          onClick={reload}
        ></Button>
      </div>
    </section>
  );
}
