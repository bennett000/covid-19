import { Component, h } from 'preact';
import {
  LineGraphState,
  ChartSeries,
  SelectOptionsWithIndex,
  MenuProp,
} from '../interfaces';
import { Chart } from '../components/chart';
import { flexCol, fullSize, flexItem60, flexItem95, flex } from '../constants';
import { TimeVsCountsControls } from './time-vs-counts-controls';
import { ButtonToggle } from '../components/button-toggle';
import { Menu } from '../components/menu';
import { Strings } from '../i18n';

export class TimeVsCount extends Component<{
  clearCountries: () => any;
  countries: SelectOptionsWithIndex[];
  countryKeys: string[];
  currentSeries: ChartSeries[];
  menu: MenuProp;
  onChange: (lgs: LineGraphState) => any;
  reload: () => any;
  selectCountry: (country: string) => any;
  selectCountries: (countries: string[]) => any;
  state: LineGraphState;
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

  useDays() {
    if (this.props.state.mode !== 0) {
      return true;
    } else {
      return false;
    }
  }

  toggleConfig(v: boolean) {
    this.props.onChange({
      ...this.props.state,
      isConfigOpen: v,
    });
  }

  setCountryFilter(filter: string) {
    this.props.onChange({
      ...this.props.state,
      countryFilter: filter,
    });
  }

  render() {
    const classes =
      this.props.state.isConfigOpen === false &&
      this.props.countryKeys.length === 0
        ? ['green']
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
      yAxis: {
        scale: {
          type: this.props.state.scaleType === 0 ? 'auto' : 'logarithmic',
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
          flexSize={this.props.state.isConfigOpen ? flexItem60 : flexItem95}
          options={options}
          strings={this.props.strings}
        ></Chart>
        <section className={flex}>
          <ButtonToggle
            classes={classes}
            labelTrue={this.props.strings.lineGraph.enlarge}
            labelFalse={this.props.strings.lineGraph.configure}
            onClick={this.toggleConfig.bind(this)}
            state={this.props.state.isConfigOpen}
          />
          <Menu config={this.props.menu}></Menu>
        </section>
        {this.props.state.isConfigOpen ? (
          <TimeVsCountsControls
            onUpdateCountryFilter={this.setCountryFilter.bind(this)}
            clearCountries={this.props.clearCountries}
            countryKeys={this.props.countryKeys}
            countries={this.props.countries}
            currentSeries={this.props.currentSeries}
            onChange={this.props.onChange}
            reload={this.props.reload}
            selectCountry={this.props.selectCountry}
            selectCountries={this.props.selectCountries}
            state={this.props.state}
            strings={this.props.strings}
          />
        ) : (
          ''
        )}
      </section>
    );
  }
}
