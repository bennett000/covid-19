// Unlike almost every other source file in this project this file is
// MIT licensed as `JSC` is proprietary
declare const JSC: any;
import { Component, h } from 'preact';
import { fullSize, strings } from '../constants';

export class ChartMap extends Component<
  {
    ranges: { color: string; value: number[] }[];
    series: any;
    toolTip: string;
  },
  { chartDiv: HTMLDivElement }
> {
  constructor() {
    super();

    const chartDiv = window.document.createElement('div');
    if (!chartDiv) {
      throw new Error(strings.errors.chart.domError);
    }
    this.state = { chartDiv };
  }

  componentDidMount() {
    (this.base as any).id = 'chartMapDiv';
  }

  componentDidUpdate() {
    JSC.Chart('chartMapDiv', {
      type: 'map',
      defaultPoint: {
        tooltip: this.props.toolTip,
        z: 0,
      },
      palette: {
        pointValue: p => p.options('z'),
        ranges: this.props.ranges,
      },
      series: this.props.series,
    });
  }

  render() {
    return <div className={fullSize}></div>;
  }
}
