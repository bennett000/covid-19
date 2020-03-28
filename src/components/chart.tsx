// Unlike almost every other source file in this project this file is
// MIT licensed as `JSC` is proprietary
declare const JSC: any;
import { Component, h } from 'preact';
import { ChartSeries } from '../interfaces';
import { Strings } from '../i18n';

export class Chart extends Component<{
  flexSize: string;
  series: ChartSeries[];
  scaleType: number;
  strings: Strings;
  useDays: boolean;
}> {
  constructor() {
    super();
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
