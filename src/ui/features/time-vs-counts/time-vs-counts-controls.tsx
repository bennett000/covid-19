import { h } from 'preact';
import { Select } from '../../components/input/select';
import { SelectMultiple } from '../../components/input/select-multiple';
import { InputDate } from '../../components/input/date';
import { Button } from '../../components/input/button';
import { flex, flexCol, flexItem20, highlight, styles } from '../../style';
import { SelectOptionsWithIndex } from '../../../interfaces';
import { SelectMultipleFilter } from '../../components/input/select-multiple-filter';
import { Strings } from '../../../i18n';
import { JsChartingSeries } from '../../../data/data.interfaces';

export function TimeVsCountsControls({
  clearCountries,
  countries,
  countryFilter,
  countryKeys,
  dataSetIndexes,
  mode,
  reload,
  scaleType,
  selectedCountry,
  selectedDataSets,
  selectedDate,
  selectedMode,
  selectedScaleType,
  showStates,
  strings,
  toggledPerCapita,
  toggledShowSeirState,
  toggledShowStates,
  updatedCountryFilter,
  usePerCapita,
  ymdStartDate,
}: {
  clearCountries: () => any;
  countries: SelectOptionsWithIndex[];
  countryFilter: string;
  countryKeys: string[];
  currentSeries: JsChartingSeries[];
  dataSetIndexes: number[];
  mode: number;
  reload: () => any;
  scaleType: number;
  selectedCountry: (country: string) => any;
  selectedDataSets: (dataSetIndexes: any[]) => any;
  selectedDate: (date: string) => any;
  selectedMode: (mode: number) => any;
  selectedScaleType: (mode: number) => any;
  showStates: boolean;
  strings: Strings;
  toggledPerCapita: () => any;
  toggledShowSeirState: () => any;
  toggledShowStates: () => any;
  updatedCountryFilter: (filter: string) => any;
  usePerCapita: boolean;
  ymdStartDate: string;
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
  const showStatesString = strings.states;
  const metrics = [strings.metrics.byValue, strings.metrics.byPercent];

  return (
    <section className={`${flex} ${flexItem20}`}>
      <section className={flexCol}>
        <Select
          classes={styles.selectBox}
          onChange={selectedMode}
          options={modes}
          selected={mode}
        />
        <Select
          classes={styles.selectBox}
          onChange={selectedScaleType}
          options={scaleTypes}
          selected={scaleType}
        />
        <InputDate
          classes={styles.input}
          onChange={selectedDate}
          ymdString={ymdStartDate}
        />
        <Button
          classes={styles.button}
          label={strings.timeVsCounts.configureSeir}
          onClick={toggledShowSeirState}
        />
      </section>
      <SelectMultiple
        classes={styles.selectBox}
        onChange={selectedDataSets}
        options={dataSets}
        selected={dataSetIndexes}
      />
      <SelectMultipleFilter
        classes={countryKeys.length === 0 ? [highlight] : []}
        inputButtonClasses={styles.button}
        inputSelectClasses={styles.selectBox}
        inputStringClasses={styles.input}
        filter={countryFilter}
        onUpdateFilter={updatedCountryFilter}
        onChange={selectedCountry as any}
        onClear={clearCountries}
        onDeselect={selectedCountry}
        options={countries}
        selected={countryKeys}
      />
      <div className={flexCol}>
        <Select
          classes={styles.selectBox}
          onChange={toggledShowStates}
          options={showStatesString}
          selected={showStates ? 1 : 0}
        />
        <Select
          classes={styles.selectBox}
          onChange={toggledPerCapita}
          options={metrics}
          selected={usePerCapita ? 1 : 0}
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
