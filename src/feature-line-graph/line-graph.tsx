import { Component, h } from 'preact';
import {
  LineGraphState,
  ChartSeries,
  SelectOptionsWithIndex,
  MenuProp,
} from '../interfaces';
import { Chart } from '../components/chart';
import { flexCol, fullSize, flexItem60, flexItem95, flex } from '../constants';
import { LineGraphControls } from '../components/line-graph-controls';
import { ButtonToggle } from '../components/button-toggle';
import { Menu } from '../components/menu';

export class LineGraph extends Component<{
  clearCountries: () => any;
  countries: SelectOptionsWithIndex[];
  countryIndexes: number[];
  currentSeries: ChartSeries[];
  menu: MenuProp;
  onChange: (lgs: LineGraphState) => any;
  reload: () => any;
  selectCountry: (country: number) => any;
  state: LineGraphState;
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
      this.props.countryIndexes.length === 0
        ? ['green']
        : [];
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <Chart
          flexSize={this.props.state.isConfigOpen ? flexItem60 : flexItem95}
          series={this.props.currentSeries}
          scaleType={this.props.state.scaleType}
          useDays={this.useDays()}
        ></Chart>
        <section className={flex}>
          <ButtonToggle
            classes={classes}
            labelTrue="✗ Enlarge Chart"
            labelFalse="⚙️ Configure Chart"
            onClick={this.toggleConfig.bind(this)}
            state={this.props.state.isConfigOpen}
          />
          <Menu config={this.props.menu}></Menu>
        </section>
        {this.props.state.isConfigOpen ? (
          <LineGraphControls
            onUpdateCountryFilter={this.setCountryFilter.bind(this)}
            clearCountries={this.props.clearCountries}
            countryIndexes={this.props.countryIndexes}
            countries={this.props.countries}
            currentSeries={this.props.currentSeries}
            onChange={this.props.onChange}
            reload={this.props.reload}
            selectCountry={this.props.selectCountry}
            state={this.props.state}
          />
        ) : (
          ''
        )}
      </section>
    );
  }
}
