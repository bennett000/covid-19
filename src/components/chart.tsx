declare const JSC: any;
import { Component, h } from 'preact';
import { ChartSeries } from '../interfaces';

export class Chart extends Component<
  { flexSize: string; series: ChartSeries[]; useDays?: boolean },
  { chartDiv: HTMLDivElement }
> {
  constructor() {
    super();

    const chartDiv = window.document.createElement('div');
    if (!chartDiv) {
      throw new Error('could not add the chart to the DOM');
    }
    this.state = { chartDiv };
  }

  componentDidMount() {
    (this.base as any).id = 'chartDiv';
  }

  componentDidUpdate() {
    JSC.Chart('chartDiv', {
      xAxis_label_text: this.props.useDays ? 'Day' : undefined,
      xAxis: {
        scaleType: 'time',
        customTicks: [
          {
            // A tick for every month.
            value: {
              month: '*',
            },
            label_text: '%min',
          },
          {
            // every month
            value: { week: '*' },
            label_text: '%min',
          },
        ],
      },
      legend: {
        template: '%icon %name',
      },
      series: this.props.series,
    });
  }

  render() {
    return <div className={this.props.flexSize}></div>;
  }
}
