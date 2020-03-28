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
  toolTip: string;
}> {
  constructor() {
    super();
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
