import { Component, h } from 'preact';
import { ChartMap } from '../components/map';
import { Menu } from '../components/menu';
import { MenuProp, ITimeSeriesArray, ITimeSeries } from '../interfaces';
import {
  activeRanges,
  confirmedRanges,
  deathRanges,
  recoveryRanges,
  usaCode,
  jhuStartDay,
} from '../constants';
import { flexCol, fullSize, flex, borderCurved, styles } from '../style';
import {
  statesToCodes,
  usStateCodeByName,
  countriesToContinents,
  excludeFromMap,
} from '../data-maps';
import { Select } from '../components/input/select';
import { Strings } from '../i18n';
import { noop, objReduce } from '@ch1/utility';
import { ButtonToggle } from '../components/input/button-toggle';
import { generateDateDictionary, createToolTip } from '../data';

export class Geography extends Component<
  {
    menu: MenuProp;
    strings: Strings;
    timeSeries: ITimeSeriesArray;
  },
  {
    currentSeries: number;
    dataSet: number;
    isPlaying: boolean;
    map: string;
    menuProp: MenuProp;
    timer: any;
    title: string;
  }
> {
  dates: Date[];
  getSeries: (
    record?: number
  ) => {
    ranges: { color: string; value: number[] }[];
    series: any;
  };

  constructor() {
    super();
    this.state = {
      currentSeries: -1,
      dataSet: 0,
      isPlaying: false,
      map: 'world',
      menuProp: {
        labels: [],
        onClick: noop,
        selected: -1,
      },
      timer: 0,
      title: '',
    };

    this.dates = objReduce(
      generateDateDictionary(),
      (arr, index, dateString) => {
        arr[index] = dateString;
        return arr;
      },
      []
    );
    this.getSeries = this.getCountrySeries;
  }

  componentWillReceiveProps(props) {
    this.setState({
      ...this.state,
      menuProp: {
        ...props.menu,
        disabled: this.state.isPlaying,
      },
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

  getMapTitle(index?: number) {
    if (index === undefined) {
      return new Date(this.dates[this.dates.length - 1]).toLocaleDateString();
    }
    return (
      this.getSeriesName() +
      ' ' +
      new Date(this.dates[index]).toLocaleDateString()
    );
  }

  getSeriesName() {
    switch (this.state.dataSet) {
      case 0:
        return this.props.strings.geography.mode0;
      case 1:
        return this.props.strings.geography.mode1;
      case 2:
        return this.props.strings.geography.mode2;
      case 3:
        return this.props.strings.geography.mode3;
      default:
        return this.props.strings.geography.mode0;
    }
  }

  togglePlay() {
    const isPlaying = this.state.isPlaying ? false : true;
    const startDate = new Date(jhuStartDay).getTime();
    const days = Math.floor(
      (Date.now() - 24 * 60 * 60 * 1000 - startDate) / 1000 / 60 / 60 / 24
    );
    this.setState({
      ...this.state,
      isPlaying,
      currentSeries: isPlaying ? 0 : -1,
      menuProp: {
        ...this.state.menuProp,
        disable: isPlaying,
      },
      title: this.getMapTitle(),
      timer: isPlaying
        ? setInterval(() => {
            if (this.state.currentSeries >= days) {
              this.togglePlay();
              return;
            }
            this.setState({
              ...this.state,
              currentSeries: this.state.currentSeries + 1,
              title: this.getMapTitle(this.state.currentSeries + 1),
            });
          }, 500)
        : clearInterval(this.state.timer),
    });
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
      case usaCode.toLowerCase():
        this.getSeries = this.getStateSeries.bind(this, usaCode, usaCode);
        this.setState({
          ...this.state,
          map: usaCode.toLowerCase(),
        });
        break;
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

  getCountrySeries(record = -1) {
    let max = 0;
    const s = [];
    this.props.timeSeries.forEach(ts => {
      const code = ts.countryCode();
      if (code === this.props.strings.countries.world) {
        return null;
      }

      if (excludeFromMap[code]) {
        return null;
      }

      if (ts.state()) {
        if (ts.state() !== this.props.strings.countries.total) {
          return null;
        }
      }
      if (ts.locale()) {
        return null;
      }
      if (!ts.population()) {
        return null;
      }
      const value = getFromDataSet(this.state.dataSet, ts, record);

      if (value < 1) {
        return null;
      }

      if (value > max) {
        max = value;
      }

      s.push({
        attributes: {
          toolTip: createToolTip(
            ts,
            this.state.dataSet,
            ts.counts().length - 1
          ),
        },
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

  getContinentSeries(continent: string, record = -1) {
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
        if (ts.state() !== this.props.strings.countries.total) {
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
      const value = getFromDataSet(this.state.dataSet, ts, record);

      if (value < 1) {
        return null;
      }

      if (value > max) {
        max = value;
      }

      s.push({
        attributes: {
          toolTip: createToolTip(
            ts,
            this.state.dataSet,
            ts.counts().length - 1
          ),
        },
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

  getStateSeries(country: string, countryCode: string, record = -1) {
    let max = 0;
    const s = [];
    this.props.timeSeries.forEach(ts => {
      if (ts.country() !== country) {
        return null;
      }
      if (ts.state() === this.props.strings.countries.total) {
        return null;
      }
      if (ts.locale()) {
        return null;
      }
      let stc = statesToCodes[country];
      if (!stc) {
        if (countryCode === usaCode) {
          stc = usStateCodeByName;
        } else {
          return null;
        }
      }
      const code = ts.stateCode();
      if (!code) {
        return null;
      }
      if (excludeFromMap[ts.countryCode() + '.' + code]) {
        return null;
      }
      const value = getFromDataSet(this.state.dataSet, ts, record);

      if (value < 1) {
        return null;
      }

      if (value > max) {
        max = value;
      }

      s.push({
        attributes: {
          toolTip: createToolTip(
            ts,
            this.state.dataSet,
            ts.counts().length - 1
          ),
        },
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
    const { ranges, series } = this.getSeries(this.state.currentSeries);
    return (
      <section
        onClick={this.zoomOut.bind(this)}
        className={`${fullSize} ${flexCol}`}
      >
        <ChartMap
          ranges={ranges}
          series={series}
          strings={this.props.strings}
          title={this.state.title}
        />
        <section className={flex}>
          <Select
            classes={styles.selectBox}
            onChange={this.onChangeDataSet.bind(this)}
            options={[
              this.props.strings.series.activeCases,
              this.props.strings.series.confirmedCases,
              this.props.strings.series.deaths,
              this.props.strings.series.recoveries,
            ]}
            selected={this.state.dataSet}
          ></Select>
          <ButtonToggle
            classes={styles.button}
            labelFalse={this.props.strings.geography.play}
            labelTrue={this.props.strings.geography.stop}
            onClick={this.togglePlay.bind(this)}
            state={this.state.isPlaying}
          ></ButtonToggle>
          <Menu config={this.state.menuProp}></Menu>
        </section>
      </section>
    );
  }
}

function getFromDataSet(index: number, ts: ITimeSeries, record = -1) {
  if (record < 0) {
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
  } else {
    switch (index) {
      case 0:
        return ts.counts()[record].active || 0;
      case 1:
        return ts.counts()[record].confirmed || 0;
      case 2:
        return ts.counts()[record].deaths || 0;
      case 3:
        return ts.counts()[record].recoveries || 0;
      default:
        return ts.counts()[record].active || 0;
    }
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
