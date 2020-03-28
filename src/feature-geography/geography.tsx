import { Component, h } from 'preact';
import { ChartMap } from '../components/map';
import { Menu } from '../components/menu';
import { MenuProp, ITimeSeriesArray, ITimeSeries } from '../interfaces';
import {
  flexCol,
  fullSize,
  flex,
  activeRanges,
  confirmedRanges,
  deathRanges,
  recoveryRanges,
  strings,
} from '../constants';
import {
  statesToCodes,
  usStateCodeByName,
  countriesToContinents,
  excludeFromMap,
} from '../data-maps';
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
  getSeries: () => {
    ranges: { color: string; value: number[] }[];
    series: any;
  };

  constructor() {
    super();
    this.state = {
      dataSet: 0,
      map: 'world',
      toolTip: '<b>%name<b/> <br/>Active Cases: %zValue',
    };

    this.getSeries = this.getCountrySeries;
  }

  componentDidMount() {
    // force chart to redraw
    this.setState({
      ...this.state,
    });
  }

  countryFromClick(e: any): string {
    if (!e) {
      return null;
    }
    if (!e.currentTarget) {
      return null;
    }
    if (!e.currentTarget.currentOptions) {
      return null;
    }
    if (!e.currentTarget.currentOptions.map) {
      return null;
    }
    if (!e.currentTarget.currentOptions.map.properties) {
      return null;
    }

    if (!e.currentTarget.currentOptions.map.properties.mapcode) {
      return null;
    }

    return e.currentTarget.currentOptions.map.properties.mapcode;
  }

  continentFromClick(e: any): string {
    if (!e) {
      return null;
    }
    if (!e.currentTarget) {
      return null;
    }
    if (!e.currentTarget.currentOptions) {
      return null;
    }
    if (!e.currentTarget.currentOptions.map) {
      return null;
    }
    if (!e.currentTarget.currentOptions.map.properties) {
      return null;
    }

    if (!e.currentTarget.currentOptions.map.properties.continent) {
      return null;
    }

    return e.currentTarget.currentOptions.map.properties.continent;
  }

  onMapClick(e: any) {
    const c = this.countryFromClick(e);
    switch (c.toLowerCase()) {
      case 'au':
        this.getSeries = this.getStateSeries.bind(this, 'Australia', 'AU');
        this.setState({
          ...this.state,
          map: 'au',
        });
        break;
      case 'ca':
        this.getSeries = this.getStateSeries.bind(this, 'Canada', 'CA');
        this.setState({
          ...this.state,
          map: 'ca',
        });
        break;
      case 'cn':
        this.getSeries = this.getStateSeries.bind(this, 'China', 'CN');
        this.setState({
          ...this.state,
          map: 'cn',
        });
        break;
      // us state data is gone in the updated data set
      // case 'us':
      //   this.getSeries = this.getStateSeries.bind(this, 'US', 'US');
      //   this.setState({
      //     ...this.state,
      //     map: 'us',
      //   });
      //   break;
      default:
        this.tryContinent(e);
        break;
    }
  }

  tryContinent(e: any) {
    const continent = this.continentFromClick(e);
    if (!continent) {
      return;
    }
    let finalContinent = continent;
    if (continent === 'North America' || continent === 'South America') {
      finalContinent = 'Americas';
    }
    this.getSeries = this.getContinentSeries.bind(this, continent);
    this.setState({
      ...this.state,
      map: finalContinent,
    });
  }

  getCountrySeries() {
    let max = 0;
    const s = [];
    this.props.timeSeries.forEach(ts => {
      const code = ts.countryCode();
      if (excludeFromMap[code]) {
        return null;
      }

      if (ts.state()) {
        if (ts.state() !== strings.countries.total) {
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
      ranges: getRangesFromDataSet(this.state.dataSet),
      series: [
        {
          defaultPoint_events_click: this.onMapClick.bind(this),
          map: this.state.map,
          points: s,
        },
      ],
    };
  }

  getContinentSeries(continent: string) {
    let max = 0;
    const s = [];
    this.props.timeSeries.forEach(ts => {
      const isIn = countriesToContinents[ts.country()];
      if (!isIn) {
        return null;
      }
      if (isIn !== continent) {
        if (isIn.indexOf('America') > -1 && continent.indexOf('America') > -1) {
        } else {
          return null;
        }
      }
      if (ts.state()) {
        if (ts.state() !== strings.countries.total) {
          return null;
        }
        if (ts.locale()) {
          return null;
        }
      }

      const code = ts.countryCode();
      if (excludeFromMap[code]) {
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
        map: code.toLowerCase(),
        z: value,
      });
    });

    return {
      ranges: getRangesFromDataSet(this.state.dataSet),
      series: [
        {
          defaultPoint_events_click: this.onMapClick.bind(this),
          map: this.state.map,
          points: s,
        },
      ],
    };
  }

  getStateSeries(country: string, countryCode: string) {
    let max = 0;
    const s = [];
    this.props.timeSeries.forEach(ts => {
      if (ts.country() !== country) {
        return null;
      }
      if (ts.state() === strings.countries.total) {
        return null;
      }
      if (ts.locale()) {
        return null;
      }
      let stc = statesToCodes[country];
      if (!stc) {
        if (countryCode === 'US') {
          stc = usStateCodeByName;
        } else {
          return null;
        }
      }
      const code = ts.stateCode();
      if (excludeFromMap[ts.countryCode() + '.' + code]) {
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
        map: countryCode + '.' + code,
        z: value,
      });
    });

    return {
      ranges: getRangesFromDataSet(this.state.dataSet),
      series: [
        {
          defaultPoint_events_click: this.onMapClick.bind(this),
          map: this.state.map,
          points: s,
        },
      ],
    };
  }

  onChangeDataSet(index: number | string) {
    const int = parseInt(index + '', 10);
    this.setState({
      ...this.state,
      dataSet: int,
      toolTip: getToolTip(int),
    });
  }

  zoomOut() {
    this.getSeries = this.getCountrySeries;
    if (this.state.map !== 'world') {
      this.setState({
        ...this.state,
        map: 'world',
      });
    }
  }

  render() {
    const { ranges, series } = this.getSeries();
    return (
      <section
        onClick={this.zoomOut.bind(this)}
        className={`${fullSize} ${flexCol}`}
      >
        <ChartMap
          ranges={ranges}
          series={series}
          toolTip={this.state.toolTip}
        />
        <section className={flex}>
          <Select
            onChange={this.onChangeDataSet.bind(this)}
            options={[
              strings.series.activeCases,
              strings.series.confirmedCases,
              strings.series.deaths,
              strings.series.recoveries,
            ]}
            selected={this.state.dataSet}
          ></Select>
          <Menu config={this.props.menu}></Menu>
        </section>
      </section>
    );
  }
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

function getRangesFromDataSet(index: number) {
  switch (index) {
    case 0:
      return activeRanges;
    case 1:
      return confirmedRanges;
    case 2:
      return deathRanges;
    case 3:
      return recoveryRanges;
    default:
      return activeRanges;
  }
}
