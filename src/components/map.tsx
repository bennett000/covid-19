// Unlike almost every other source file in this project this file is
// MIT licensed as `JSC` is proprietary
declare const JSC: any;
import { Component, h } from 'preact';
import { fullSize } from '../constants';

export class ChartMap extends Component<{}, { chartDiv: HTMLDivElement }> {
  constructor() {
    super();

    const chartDiv = window.document.createElement('div');
    if (!chartDiv) {
      throw new Error('could not add the chart to the DOM');
    }
    this.state = { chartDiv };
  }

  componentDidMount() {
    (this.base as any).id = 'chartMapDiv';
  }

  componentDidUpdate() {
    JSC.Chart('chartMapDiv', {
      type: 'map',
      series: [{ map: 'world' }],
    });
  }

  render() {
    return <div className={fullSize}></div>;
  }
}
