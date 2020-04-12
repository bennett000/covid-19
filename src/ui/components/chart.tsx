// Unlike almost every other source file in this project this file is
// MIT licensed as `JSC` is proprietary
declare const JSC: any;
import { Component, h } from 'preact';
import { Strings } from '../../i18n';
import { debounce } from '../../utility';
import { JsChartingSeries } from '../../data/data.interfaces';

export class Chart extends Component<{
  options: { series: JsChartingSeries[] };
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
