import { Component, h } from 'preact';
import { connect } from 'react-redux';
import {
  TimeVsCountsState,
  SelectOptionsWithIndex,
  MenuProp,
} from '../../../interfaces';
import { Chart } from '../../components/chart';
import {
  flexCol,
  fullSize,
  flexItem60,
  flexItem95,
  flex,
  styles,
  green,
} from '../../style';
import { TimeVsCountsControls } from './time-vs-counts-controls';
import { ButtonToggle } from '../../components/input/button-toggle';
import { Menu } from '../../components/menu';
import { Strings } from '../../../i18n';
import { Button } from '../../components/input/button';
import { JsChartingSeries } from '../../../data/data.interfaces';
import * as countriesState from '../../store/countries';
import * as timeVsCountsState from './time-vs-counts.state';
import * as seirState from '../../containers/seir/seir.state';
import { SeirContainer } from '../../containers/seir/seir-container';

class BaseTimeVsCount extends Component<{
  clearCountries: () => any;
  countries: SelectOptionsWithIndex[];
  countryFilter: string;
  countryKeys: string[];
  currentSeries: JsChartingSeries[];
  dataSetIndexes: number[];
  isConfigOpen: boolean;
  menu: MenuProp;
  mode: number;
  reload: () => any;
  scaleType: number;
  selectedCountry: (country: string) => any;
  selectedDataSets: (dataSetIndexes: any[]) => any;
  selectedStartDate: (ymdString: string) => any;
  selectedMode: (mode: number) => any;
  selectedScaleType: (mode: number) => any;
  showSeirState: boolean;
  showStates: boolean;
  state: TimeVsCountsState;
  strings: Strings;
  toggledConfig: () => any;
  toggledPerCapita: () => any;
  toggledShowSeirState: () => any;
  toggledShowStates: () => any;
  updatedCountryFilter: (filter: string) => any;
  usePerCapita: boolean;
  ymdStartDate: string;
}> {
  constructor() {
    super();
    this.state = {};
  }

  useDays() {
    if (this.props.mode !== 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const classes =
      this.props.isConfigOpen === false && this.props.countryKeys.length === 0
        ? [green]
        : [];
    const customTicks = [
      {
        // A tick for every month.
        value: {
          month: '*',
        },
        label_text: '%min',
      },
      {
        // every month
        value: { week: '*' },
        label_text: '%min',
      },
    ];

    const options = {
      xAxis_label_text: this.useDays() ? 'Day' : undefined,
      xAxis: {
        scale: {
          type: this.useDays() ? 'auto' : 'time',
        },
        customTicks,
      },
      yAxis_label_text: this.props.usePerCapita
        ? this.props.strings.timeVsCounts.percent
        : this.props.strings.timeVsCounts.people,
      yAxis: {
        scale: {
          type: this.props.scaleType === 0 ? 'auto' : 'logarithmic',
        },
      },
      legend: {
        template: '%icon %name',
      },
      series: this.props.currentSeries,
    };
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <Chart
          flexSize={this.props.isConfigOpen ? flexItem60 : flexItem95}
          options={options}
          strings={this.props.strings}
        ></Chart>
        <section className={flex}>
          <ButtonToggle
            classes={styles.button.concat(classes)}
            labelTrue={this.props.strings.timeVsCounts.enlarge}
            labelFalse={this.props.strings.timeVsCounts.configure}
            onClick={this.props.toggledConfig}
            state={this.props.isConfigOpen}
          />
          <Menu config={this.props.menu}></Menu>
        </section>
        {this.props.isConfigOpen ? (
          this.props.showSeirState ? (
            <div className={flex}>
              <div className={flexCol}>
                <Button
                  classes={
                    this.props.countryKeys.length === 0
                      ? styles.button.concat([green])
                      : styles.button
                  }
                  label={this.props.strings.timeVsCounts.configureChart}
                  onClick={this.props.toggledShowSeirState}
                />
                <Button
                  classes={styles.button}
                  label={this.props.strings.timeVsCounts.resetSeir}
                  onClick={seirState.actions.reset}
                />
              </div>
              <SeirContainer />
            </div>
          ) : (
            <TimeVsCountsControls
              clearCountries={this.props.clearCountries}
              countries={this.props.countries}
              countryFilter={this.props.countryFilter}
              countryKeys={this.props.countryKeys}
              currentSeries={this.props.currentSeries}
              dataSetIndexes={this.props.dataSetIndexes}
              mode={this.props.mode}
              reload={this.props.reload}
              scaleType={this.props.scaleType}
              selectedCountry={this.props.selectedCountry}
              selectedDataSets={this.props.selectedDataSets}
              selectedDate={this.props.selectedStartDate}
              selectedMode={this.props.selectedMode}
              selectedScaleType={this.props.selectedScaleType}
              showStates={this.props.showStates}
              strings={this.props.strings}
              toggledPerCapita={this.props.toggledPerCapita}
              toggledShowSeirState={this.props.toggledShowSeirState}
              toggledShowStates={this.props.toggledShowStates}
              updatedCountryFilter={this.props.updatedCountryFilter}
              usePerCapita={this.props.usePerCapita}
              ymdStartDate={this.props.ymdStartDate}
            />
          )
        ) : (
          ''
        )}
      </section>
    );
  }
}

export const TimeVsCount = connect(
  state => ({
    countries: countriesState.select.countries(state),
    countryFilter: countriesState.select.filter(state),
    countryKeys: countriesState.select.selected(state),
    currentSeries: timeVsCountsState.select.currentSeries(state),
    dataSetIndexes: timeVsCountsState.select.dataSetIndexes(state),
    isConfigOpen: timeVsCountsState.select.isConfigOpen(state),
    mode: timeVsCountsState.select.mode(state),
    scaleType: timeVsCountsState.select.scaleType(state),
    showStates: countriesState.select.showStates(state),
    showSeirState: timeVsCountsState.select.showSeirState(state),
    usePerCapita: timeVsCountsState.select.usePerCapita(state),
    ymdStartDate: timeVsCountsState.select.startDate(state),
    strings: state.strings,
  }),
  {
    clearCountries: countriesState.actions.clickedClear,
    selectedCountry: countriesState.actions.selected,
    selectedDataSets: timeVsCountsState.actions.selectedDataSets,
    selectedStartDate: timeVsCountsState.actions.selectedStartDate,
    selectedMode: timeVsCountsState.actions.selectedMode,
    selectedScaleType: timeVsCountsState.actions.selectedScaleType,
    toggledConfig: timeVsCountsState.actions.toggledConfig,
    toggledPerCapita: timeVsCountsState.actions.toggledPerCapita,
    toggledShowSeirState: timeVsCountsState.actions.toggledSeirControls,
    toggledShowStates: countriesState.actions.toggledShowStates,
    updatedCountryFilter: countriesState.actions.updatedFilter,
  }
)(BaseTimeVsCount);
