// Unlike almost every other source file in this project this file is
// MIT licensed as `JSC` is proprietary
declare const JSC: any;
import { Component, h } from 'preact';
import { ChartSeries } from '../../interfaces';
import { Strings } from '../../i18n';
import { log } from '../../utility';

export class Chart extends Component<{
  options: { series: ChartSeries[] };
  flexSize: string;
  strings: Strings;
}> {
  chart: any;
  constructor() {
    super();
  }

  private createChart(props = this.props) {
    if (!this.chart && props.options.series.length) {
      this.chart = JSC.Chart('chartDiv', props.options);
    }
  }

  componentDidMount() {
    (this.base as any).id = 'chartDiv';
    this.createChart();
  }

  componentWillReceiveProps = debounce(props => {
    this.chart = null;
    this.createChart(props);
  });

  render() {
    return <div className={this.props.flexSize}></div>;
  }
}

function debounce(fn: Function, limit = 50) {
  let isRunning: any = 0;
  let lastArgs: any[] = [];

  const run = () => {
    try {
      fn(...lastArgs);
    } catch (e) {
      log('Warning debounced function failed: ' + e.message);
    } finally {
      isRunning = 0;
      lastArgs = [];
    }
  };

  return (...args: any[]) => {
    lastArgs = args;

    if (isRunning) {
      clearTimeout(isRunning);
      isRunning = setTimeout(run, limit);
    } else {
      isRunning = setTimeout(run, limit);
    }
  };
}
