// Unlike almost every other source file in this project this file is
// MIT licensed as `JSC` is proprietary
declare const JSC: any;
import { Component, h } from 'preact';
import { fullSize } from '../constants';
import { Strings } from '../i18n';

export class ChartMap extends Component<{
  ranges: { color: string; value: number[] }[];
  series: any;
  strings: Strings;
  title?: string;
}> {
  chart: any;

  constructor() {
    super();
  }

  componentDidMount() {
    (this.base as any).id = 'chartMapDiv';
    if (!this.chart) {
      this.chart = JSC.Chart('chartMapDiv', this.getChartOptions());
    }
  }

  componentWillReceiveProps(props) {
    if (this.chart) {
      this.chart.options(this.getChartOptions(props));
    }
  }

  getChartOptions(props = this.props) {
    return {
      title_label_text: props.title || '',
      type: 'map',
      defaultPoint: {
        attributes: {
          toolTip: '<b>%name</b>',
        },
        tooltip: '%toolTip',
        z: 0,
      },
      palette: {
        pointValue: p => p.options('z'),
        ranges: props.ranges,
      },
      series: props.series,
    };
  }

  render() {
    return <div className={fullSize}></div>;
  }
}
