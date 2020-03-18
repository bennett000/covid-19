import { Component, h } from 'preact';
import {
  LineGraphState,
  ChartSeries,
  SelectOptionsWithIndex,
} from '../interfaces';
import { Chart } from '../components/chart';
import { flexCol, fullSize, flexItem60, flexItem95 } from '../constants';
import { LineGraphControls } from '../components/line-graph-controls';
import { ButtonToggle } from '../components/button-toggle';

export class LineGraph extends Component<
  {
    countries: SelectOptionsWithIndex[];
    currentSeries: ChartSeries[];
    onChange: (lgs: LineGraphState) => any;
    reload: () => any;
    state: LineGraphState;
  },
  {
    isConfigOpen: boolean;
  }
> {
  constructor() {
    super();
    this.state = { isConfigOpen: false };
  }
  useDays() {
    if (this.props.state.mode !== 0) {
      return true;
    } else {
      return false;
    }
  }

  toggleConfig(v: boolean) {
    this.setState({
      ...this.state,
      isConfigOpen: v,
    });
  }

  render() {
    const classes =
      this.state.isConfigOpen === false &&
      this.props.state.countryIndexes.length === 0
        ? ['green']
        : [];
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <Chart
          flexSize={this.state.isConfigOpen ? flexItem60 : flexItem95}
          series={this.props.currentSeries}
          scaleType={this.props.state.scaleType}
          useDays={this.useDays()}
        ></Chart>
        <ButtonToggle
          classes={classes}
          labelTrue="✗"
          labelFalse="⚙️"
          onClick={this.toggleConfig.bind(this)}
          state={this.state.isConfigOpen}
        />
        {this.state.isConfigOpen ? (
          <LineGraphControls
            countries={this.props.countries}
            currentSeries={this.props.currentSeries}
            onChange={this.props.onChange}
            reload={this.props.reload}
            state={this.props.state}
          />
        ) : (
          ''
        )}
      </section>
    );
  }
}
