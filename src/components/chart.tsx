// Unlike almost every other source file in this project this file is
// MIT licensed as `JSC` is proprietary
declare const JSC: any;
import { Component, h } from 'preact';
import { ChartSeries } from '../interfaces';
import { Strings } from '../i18n';

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

  componentWillReceiveProps(props) {
    if (!this.chart) {
      this.createChart(props);
    } else {
      this.chart.options(props.options);
    }
  }

  render() {
    return <div className={this.props.flexSize}></div>;
  }
}
