import { Component, h } from 'preact';
import {
  MenuProp,
  ChartSeries,
  ConfirmedVsRecentState,
  SelectOptionsWithIndex,
} from '../interfaces';
import {
  flexCol,
  fullSize,
  flex,
  flexItem95,
  flexItem60,
  highlight,
} from '../constants';
import { Menu } from '../components/menu';
import { Strings } from '../i18n';
import { Chart } from '../components/chart';
import { ButtonToggle } from '../components/button-toggle';
import { SelectMultipleFilter } from '../components/select-multiple-filter';
import { filterStates } from '../utility';
import { Select } from '../components/select';

export class ConfirmedVsRecent extends Component<{
  clearCountries: () => any;
  countries: SelectOptionsWithIndex[];
  countryKeys: string[];
  currentSeries: ChartSeries[];
  menu: MenuProp;
  onChange: (lgs: ConfirmedVsRecentState) => any;
  selectCountry: (country: string) => any;
  selectCountries: (countries: string[]) => any;
  state: ConfirmedVsRecentState;
  strings: Strings;
}> {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // force chart to redraw
    this.setState({
      ...this.state,
    });
  }

  selectShowStates(showOrHide: number | string) {
    this.props.onChange({
      ...this.props.state,
      showStates: parseInt(showOrHide + '', 10) === 0 ? false : true,
    });
  }

  setCountryFilter(filter: string) {
    this.props.onChange({
      ...this.props.state,
      countryFilter: filter,
    });
  }

  toggleConfig(v: boolean) {
    this.props.onChange({
      ...this.props.state,
      isConfigOpen: v,
    });
  }

  render() {
    const classes =
      this.props.state.isConfigOpen === false &&
      this.props.countryKeys.length === 0
        ? ['green']
        : [];
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <Chart
          flexSize={this.props.state.isConfigOpen ? flexItem60 : flexItem95}
          options={
            {
              xAxis: { scale: { type: 'logarithmic' } },
              xAxis_label_text: this.props.strings.confirmedVsRecent
                .confirmedCases,
              yAxis: { scale: { type: 'logarithmic' } },
              yAxis_label_text: this.props.strings.confirmedVsRecent
                .recentCases,
              series: this.props.currentSeries,
            } as any
          }
          strings={this.props.strings}
        ></Chart>
        <section className={flex}>
          <ButtonToggle
            classes={classes}
            labelTrue={this.props.strings.confirmedVsRecent.enlarge}
            labelFalse={this.props.strings.confirmedVsRecent.configure}
            onClick={this.toggleConfig.bind(this)}
            state={this.props.state.isConfigOpen}
          />
          <Menu config={this.props.menu}></Menu>
        </section>
        {this.props.state.isConfigOpen ? (
          <section className={`${flex}`}>
            <SelectMultipleFilter
              classes={this.props.countryKeys.length === 0 ? [highlight] : []}
              filter={this.props.state.countryFilter}
              onUpdateFilter={this.setCountryFilter.bind(this)}
              onChange={this.props.selectCountries}
              onClear={this.props.clearCountries}
              onDeselect={this.props.selectCountry}
              options={this.props.countries.filter(
                filterStates(this.props.state.showStates, this.props.strings)
              )}
              selected={this.props.countryKeys}
            />
            <Select
              onChange={this.selectShowStates.bind(this)}
              options={this.props.strings.states}
              selected={this.props.state.showStates ? 1 : 0}
            />
          </section>
        ) : (
          ''
        )}
      </section>
    );
  }
}
