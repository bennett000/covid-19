import { Component, h } from 'preact';
import { connect } from 'react-redux';
import { MenuProp, SelectOptionsWithIndex } from '../../../interfaces';
import {
  flexCol,
  fullSize,
  flex,
  flexItem95,
  flexItem60,
  highlight,
  styles,
  green,
} from '../../style';
import { Menu } from '../../components/menu';
import { Strings } from '../../../i18n';
import { Chart } from '../../components/chart';
import { ButtonToggle } from '../../components/input/button-toggle';
import { SelectMultipleFilter } from '../../components/input/select-multiple-filter';
import { Select } from '../../components/input/select';
import * as countriesState from '../../store/countries';
import * as confirmedVsRecentState from './confirmed-vs-recent.state';
import { debounce } from '../../../utility';
import { JsChartingSeries } from '../../../data/data.interfaces';

class BaseConfirmedVsRecent extends Component<{
  clearCountries: () => any;
  countries: SelectOptionsWithIndex[];
  countryFilter: string;
  countryKeys: string[];
  currentSeries: JsChartingSeries[];
  isConfigOpen: boolean;
  menu: MenuProp;
  selectedCountry: (country: string) => any;
  showStates: boolean;
  strings: Strings;
  toggledConfig: () => any;
  toggledShowStates: () => any;
  updatedFilter: (filter: string) => any;
}> {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const classes =
      this.props.isConfigOpen === false && this.props.countryKeys.length === 0
        ? [green]
        : [];
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <Chart
          flexSize={this.props.isConfigOpen ? flexItem60 : flexItem95}
          options={
            {
              xAxis: { scale: { type: 'logarithmic' } },
              xAxis_label_text: this.props.strings.confirmedVsRecent
                .confirmedCases,
              yAxis: { scale: { type: 'logarithmic' } },
              yAxis_label_text: this.props.strings.confirmedVsRecent
                .recentCases,
              series: this.props.currentSeries,
              legend: {
                template: '%icon %name',
              },
            } as any
          }
          strings={this.props.strings}
        ></Chart>
        <section className={flex}>
          <ButtonToggle
            classes={styles.button.concat(classes)}
            labelTrue={this.props.strings.confirmedVsRecent.enlarge}
            labelFalse={this.props.strings.confirmedVsRecent.configure}
            onClick={this.props.toggledConfig}
            state={this.props.isConfigOpen}
          />
          <Menu config={this.props.menu}></Menu>
        </section>
        {this.props.isConfigOpen ? (
          <section className={`${flex}`}>
            <SelectMultipleFilter
              classes={this.props.countryKeys.length === 0 ? [highlight] : []}
              inputButtonClasses={styles.button}
              inputSelectClasses={styles.selectBox}
              inputStringClasses={styles.input}
              filter={this.props.countryFilter}
              onUpdateFilter={debounce(this.props.updatedFilter, 100)}
              onChange={this.props.selectedCountry as any}
              onClear={this.props.clearCountries}
              onDeselect={this.props.selectedCountry}
              options={this.props.countries}
              selected={this.props.countryKeys}
            />
            <Select
              classes={styles.selectBox}
              onChange={this.props.toggledShowStates}
              options={this.props.strings.states}
              selected={this.props.showStates ? 1 : 0}
            />
          </section>
        ) : (
          ''
        )}
      </section>
    );
  }
}

export const ConfirmedVsRecent = connect(
  state => ({
    countries: countriesState.select.list(state),
    countryFilter: countriesState.select.filter(state),
    countryKeys: countriesState.select.selected(state),
    currentSeries: confirmedVsRecentState.select.currentSeries(state),
    isConfigOpen: confirmedVsRecentState.select.isConfigOpen(state),
    showStates: countriesState.select.showStates(state),
    strings: state.strings,
  }),
  {
    clearCountries: countriesState.actions.clickedClear,
    selectedCountry: countriesState.actions.selected,
    toggledConfig: confirmedVsRecentState.actions.toggledConfig,
    toggledShowStates: countriesState.actions.toggledShowStates,
    updatedFilter: countriesState.actions.updatedFilter,
  }
)(BaseConfirmedVsRecent);
