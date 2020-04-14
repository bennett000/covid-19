import { Component, h } from 'preact';
import { connect } from 'react-redux';
import {
  flexCol,
  fullSize,
  flex,
  flexItem95,
  flexItem60,
  styles,
  green,
} from '../../style';
import { Strings } from '../../../i18n';
import { Chart } from '../../components/chart';
import { ButtonToggle } from '../../components/input/button-toggle';
import * as countriesState from '../../containers/countries/countries.state';
import * as confirmedVsRecentState from './confirmed-vs-recent.state';
import { JsChartingSeries } from '../../../data/data.interfaces';
import { CountriesContainer } from '../../containers/countries/countries-container';
import { MenuContainer } from '../../containers/menu/menu-container';

class BaseConfirmedVsRecent extends Component<{
  currentSeries: JsChartingSeries[];
  isConfigOpen: boolean;
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
    const classes = this.props.isConfigOpen === false ? [green] : [];
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
          <MenuContainer />
        </section>
        {this.props.isConfigOpen ? (
          <section className={`${flex}`}>
            <CountriesContainer />
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
    currentSeries: confirmedVsRecentState.select.currentSeries(state),
    isConfigOpen: confirmedVsRecentState.select.isConfigOpen(state),
    showStates: countriesState.select.showStates(state),
    strings: state.strings,
  }),
  {
    toggledConfig: confirmedVsRecentState.actions.toggledConfig,
  }
)(BaseConfirmedVsRecent);
