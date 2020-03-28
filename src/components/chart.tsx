// Unlike almost every other source file in this project this file is
// MIT licensed as `JSC` is proprietary
declare const JSC: any;
import { Component, h } from 'preact';
import { ChartSeries } from '../interfaces';
import { strings } from '../constants';

export class Chart extends Component<
  {
    flexSize: string;
    series: ChartSeries[];
    scaleType: number;
    useDays: boolean;
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
    (this.base as any).id = 'chartDiv';
  }

  componentDidUpdate() {
    JSC.Chart('chartDiv', {
      xAxis_label_text: this.props.useDays ? 'Day' : undefined,
      xAxis: {
        scale: {
          type: this.props.useDays ? 'auto' : 'time',
        },
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
      yAxis: {
        scale: {
          type: this.props.scaleType === 0 ? 'auto' : 'logarithmic',
        },
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
