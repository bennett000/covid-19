import { Component, h } from 'preact';
import { ChartMap } from '../components/map';
import { Menu } from '../components/menu';
import { MenuProp, ITimeSeriesArray, ITimeSeries } from '../interfaces';
import { flexCol, fullSize, totalString, flex } from '../constants';
import { countriesToCodes } from '../data-maps';
import { Select } from '../components/select';

export class Geography extends Component<
  {
    menu: MenuProp;
    timeSeries: ITimeSeriesArray;
  },
  {
    map: string;
    dataSet: number;
    toolTip: string;
  }
> {
  constructor() {
    super();
    this.state = {
      dataSet: 0,
      map: 'world',
      toolTip: '<b>%name<b/> <br/>Active Cases: %zValue',
    };
  }

  componentDidMount() {
    // force chart to redraw
    this.setState({
      ...this.state,
    });
  }

  countryFromClick(e: any) {
    if (!e) {
      return null;
    }
    if (!e.currentTarget) {
      return null;
    }
    if (!e.currentTarget.currentOptions) {
      return null;
    }
    if (!e.currentTarget.currentOptions.mapDataId) {
      return null;
    }
    return e.currentTarget.currentOptions.mapDataId.split('.')[1] || null;
  }

  getSeries() {
    let max = 0;
    const s = [];
    this.props.timeSeries.forEach(ts => {
      const code = countriesToCodes[ts.country()];
      if (!code) {
        return null;
      }
      if (ts.state()) {
        if (ts.state() !== totalString) {
          return null;
        }
      }
      if (ts.locale()) {
        return null;
      }
      if (!ts.population()) {
        return null;
      }
      const value = getFromDataSet(this.state.dataSet, ts);

      if (value < 1) {
        return null;
      }

      if (value > max) {
        max = value;
      }

      s.push({
        map: 'WORLD.' + code.toLowerCase(),
        z: value,
      });
    });

    return {
      colours: generateHexColours(8),
      ranges: { min: 0, max, interval: Math.floor(max / 8) },
      series: [
        {
          defaultPoint_events_click: e => {
            const c = this.countryFromClick(e);
            switch (c.toLowerCase()) {
              case 'ca':
                this.setState({
                  ...this.state,
                  map: 'ca',
                });
                break;
              case 'cn':
                this.setState({
                  ...this.state,
                  map: 'cn',
                });
                break;
              case 'us':
                this.setState({
                  ...this.state,
                  map: 'us',
                });
                break;
              default:
                break;
            }
          },
          map: this.state.map,
          points: s,
        },
      ],
    };
  }

  onChangeDataSet(index: number) {
    this.setState({
      ...this.state,
      dataSet: index,
      toolTip: getToolTip(index),
    });
  }

  zoomOut() {
    if (this.state.map !== 'world') {
      this.setState({
        ...this.state,
        map: 'world',
      });
    }
  }

  render() {
    const { colours, ranges, series } = this.getSeries();
    return (
      <section
        onClick={this.zoomOut.bind(this)}
        className={`${fullSize} ${flexCol}`}
      >
        <ChartMap
          colours={colours}
          ranges={ranges}
          series={series}
          toolTip={this.state.toolTip}
        />
        <section className={flex}>
          <Select
            onChange={this.onChangeDataSet.bind(this)}
            options={[
              'Active Cases',
              'Confirmed Cases',
              'Deaths',
              'Recoveries',
            ]}
            selected={this.state.dataSet}
          ></Select>
          <Menu config={this.props.menu}></Menu>
        </section>
      </section>
    );
  }
}

function generateHexColours(interval: number): string[] {
  if (interval < 0) {
    interval *= -1;
  }
  const inc = Math.floor(255 / interval);
  const colours = [];

  for (let i = 255; i >= interval; i -= inc) {
    colours.push('#' + (255).toString(16) + i.toString(16) + i.toString(16));
  }

  return colours;
}

function getToolTip(index: number) {
  switch (index) {
    case 0:
      return '<b>%name<b/> <br/>Active Cases: %zValue';
    case 1:
      return '<b>%name<b/> <br/>Confirmed Cases: %zValue';
    case 2:
      return '<b>%name<b/> <br/>Deaths: %zValue';
    case 3:
      return '<b>%name<b/> <br/>Recoveries: %zValue';
    default:
      return '<b>%name<b/> <br/>Active Cases: %zValue';
  }
}

function getFromDataSet(index: number, ts: ITimeSeries) {
  switch (index) {
    case 0:
      return ts.lastActive();
    case 1:
      return ts.lastConfirmed();
    case 2:
      return ts.lastDeaths();
    case 3:
      return ts.lastRecoveries();
    default:
      return ts.lastActive();
  }
}
