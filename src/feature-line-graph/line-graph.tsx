import { route } from 'preact-router';
import { Component, h } from 'preact';
import {
  LineGraphState,
  ChartSeries,
  SelectOptionsWithIndex,
} from '../interfaces';
import { Chart } from '../components/chart';
import { flexCol, fullSize, flexItem60, flexItem95, flex } from '../constants';
import { LineGraphControls } from '../components/line-graph-controls';
import { ButtonToggle } from '../components/button-toggle';
import { Button } from '../components/button';

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

  componentWillMount() {
    this.setState({
      ...this.state,
    });
    setTimeout(() => {
      this.setState({
        ...this.state,
      });
    }, 0);
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
        <section className={flex}>
          <ButtonToggle
            classes={classes}
            labelTrue="✗ Enlarge Chart"
            labelFalse="⚙️ Configure Chart"
            onClick={this.toggleConfig.bind(this)}
            state={this.state.isConfigOpen}
          />
          <Button
            classes={classes}
            label="Table"
            onClick={() => route('/table')}
          ></Button>
        </section>
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
