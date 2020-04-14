import { h } from 'preact';
import { Select } from '../../components/input/select';
import { SelectMultiple } from '../../components/input/select-multiple';
import { InputDate } from '../../components/input/date';
import { Button } from '../../components/input/button';
import { flex, flexCol, flexItem20, styles } from '../../style';
import { Strings } from '../../../i18n';
import { JsChartingSeries } from '../../../data/data.interfaces';
import { CountriesContainer } from '../../containers/countries/countries-container';

export function TimeVsCountsControls({
  dataSetIndexes,
  mode,
  reload,
  scaleType,
  selectedDataSets,
  selectedDate,
  selectedMode,
  selectedScaleType,
  strings,
  toggledPerCapita,
  toggledShowSeirState,
  updatedCountryFilter,
  usePerCapita,
  ymdStartDate,
}: {
  currentSeries: JsChartingSeries[];
  dataSetIndexes: number[];
  mode: number;
  reload: () => any;
  scaleType: number;
  selectedDataSets: (dataSetIndexes: any[]) => any;
  selectedDate: (date: string) => any;
  selectedMode: (mode: number) => any;
  selectedScaleType: (mode: number) => any;
  strings: Strings;
  toggledPerCapita: () => any;
  toggledShowSeirState: () => any;
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
      <CountriesContainer />
      <div className={flexCol}>
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
