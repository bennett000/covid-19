import {
  ITimeSeries,
  LocationSeries,
  TimeSeriesType,
  ITimeSeriesArray,
  TimeSeriesCount,
} from './interfaces';

export class TimeSeries implements ITimeSeries {
  static create(locationSeries: LocationSeries) {
    return new TimeSeries(locationSeries);
  }

  private constructor(private data: LocationSeries) {}

  private lastValue(prop: TimeSeriesType) {
    if (this.data.counts.length < 1) {
      return 0;
    }
    return this.data.counts[this.data.counts.length - 1][prop];
  }

  private lastPercent(prop: TimeSeriesType) {
    if (this.data.counts.length < 1) {
      return 0;
    }
    if (this.data.population < 1) {
      return 0;
    }
    return (
      (this.data.counts[this.data.counts.length - 1][prop] /
        this.data.population) *
      100
    );
  }

  private peakValue(prop: TimeSeriesType) {
    if (this.data.counts.length < 1) {
      return 0;
    }
    return this.data.counts.reduce((max, next) => {
      if (next[prop] && next[prop] > max) {
        return next[prop];
      }
      return max;
    }, 0);
  }

  private peakPercent(prop: TimeSeriesType) {
    if (this.data.counts.length < 1) {
      return 0;
    }
    if (this.data.population < 1) {
      return 0;
    }
    return this.data.counts.reduce((max, next) => {
      if (next[prop]) {
        const div = (next[prop] / this.data.population) * 100;
        if (div > max) {
          return div;
        }
      }
      return max;
    }, 0);
  }

  lastActive() {
    return this.lastValue('active');
  }
  lastActivePercent() {
    return this.lastPercent('active');
  }
  lastConfirmed() {
    return this.lastValue('confirmed');
  }
  lastConfirmedPercent() {
    return this.lastPercent('confirmed');
  }
  lastDeaths() {
    return this.lastValue('deaths');
  }
  lastDeathsPercent() {
    return this.lastPercent('deaths');
  }
  lastRecoveries() {
    return this.lastValue('recoveries');
  }
  lastRecoveriesPercent() {
    return this.lastPercent('recoveries');
  }
  lastMortality() {
    if (this.lastValue('confirmed') < 1) {
      return 0;
    }
    return (this.lastValue('deaths') / this.lastValue('confirmed')) * 100;
  }
  lastNewConfirmed() {
    return this.lastValue('newConfirmed');
  }
  lastNewDeaths() {
    return this.lastValue('newDeaths');
  }

  peakActive() {
    return this.peakValue('active');
  }
  peakActivePercent() {
    return this.peakPercent('active');
  }
  peakConfirmed() {
    return this.peakValue('confirmed');
  }
  peakConfirmedPercent() {
    return this.peakPercent('confirmed');
  }
  peakDeaths() {
    return this.peakValue('deaths');
  }
  peakDeathsPercent() {
    return this.peakPercent('deaths');
  }
  peakRecoveries() {
    return this.peakValue('recoveries');
  }
  peakRecoveriesPercent() {
    return this.peakPercent('recoveries');
  }
  peakMortality() {
    if (this.peakValue('confirmed') < 1) {
      return 0;
    }
    return (this.peakValue('deaths') / this.peakValue('confirmed')) * 100;
  }
  peakNewConfirmed() {
    return this.peakValue('newConfirmed');
  }
  peakNewDeaths() {
    return this.peakValue('newDeaths');
  }

  counts() {
    return this.data.counts;
  }
  dates() {
    return this.data.dates;
  }
  country() {
    return this.data.country;
  }
  countryCode() {
    return this.data.countryCode;
  }
  countryName() {
    return this.data.country + (this.data.state ? ', ' + this.data.state : '');
  }
  key() {
    return this.data.key;
  }
  locale() {
    return this.data.locale;
  }
  population() {
    return this.data.population;
  }
  populationDensity() {
    return this.data.populationDensity;
  }
  state() {
    return this.data.state;
  }
  stateCode() {
    return this.data.stateCode;
  }
}

export class TimeSeriesArray extends Array implements ITimeSeriesArray {
  static create() {
    return new TimeSeriesArray();
  }

  private constructor() {
    super();
  }

  private sortByProp(prop: string, asc = true) {
    const ret = asc ? -1 : 1;
    this.sort((a: ITimeSeries, b: ITimeSeries) => {
      if (a[prop]() < b[prop]()) {
        return ret;
      }
      if (a[prop]() > b[prop]()) {
        return ret * -1;
      }
      return 0;
    });
  }

  clone() {
    const ns = TimeSeriesArray.create();
    this.forEach(el => ns.push(el));
    return ns;
  }

  sortByActive(asc = true) {
    this.sortByProp('lastActive', asc);
  }

  sortByActivePercent(asc = true) {
    this.sortByProp('lastActivePercent', asc);
  }

  sortByConfirmed(asc = true) {
    this.sortByProp('lastConfirmed', asc);
  }

  sortByNewConfirmed(asc = true) {
    this.sortByProp('lastNewConfirmed', asc);
  }

  sortByPeakNewConfirmed(asc = true) {
    this.sortByProp('peakNewConfirmed', asc);
  }

  sortByConfirmedPercent(asc = true) {
    this.sortByProp('lastConfirmedPercent', asc);
  }

  sortByPeakActive(asc = true) {
    this.sortByProp('peakActive', asc);
  }

  sortByPeakActivePercent(asc = true) {
    this.sortByProp('peakActivePercent', asc);
  }

  sortByPeakConfirmed(asc = true) {
    this.sortByProp('peakConfirmed', asc);
  }

  sortByPeakConfirmedPercent(asc = true) {
    this.sortByProp('peakConfirmedPercent', asc);
  }

  sortByCountry(asc = true) {
    this.sort((a: ITimeSeries, b: ITimeSeries) => {
      if (a.country() < b.country()) {
        return -1;
      }
      if (a.country() > b.country()) {
        return 1;
      }
      if (a.state() < b.state()) {
        return -1;
      }
      if (a.state() > b.state()) {
        return 1;
      }
      if (a.locale() < b.locale()) {
        return -1;
      }
      if (a.locale() > b.locale()) {
        return 1;
      }
      return 0;
    });
  }

  sortByDeaths(asc = true) {
    this.sortByProp('lastDeaths', asc);
  }

  sortByNewDeaths(asc = true) {
    this.sortByProp('lastNewDeaths', asc);
  }

  sortByPeakNewDeaths(asc = true) {
    this.sortByProp('peakNewDeaths', asc);
  }

  sortByMortality(asc = true) {
    this.sortByProp('lastMortality', asc);
  }

  sortByDeathsPercent(asc = true) {
    this.sortByProp('lastDeathsPercent', asc);
  }

  sortByPopulation(asc = true) {
    this.sortByProp('population', asc);
  }

  sortByPopulationDensity(asc = true) {
    this.sortByProp('populationDensity', asc);
  }

  sortByRecoveries(asc = true) {
    this.sortByProp('lastRecoveries', asc);
  }

  sortByRecoveriesPercent(asc = true) {
    this.sortByProp('lastRecoveriesPercent', asc);
  }

  sortByPeakDeaths(asc = true) {
    this.sortByProp('peakDeaths', asc);
  }

  sortByPeakMortality(asc = true) {
    this.sortByProp('peakMortality', asc);
  }

  sortByPeakDeathsPercent(asc = true) {
    this.sortByProp('peakDeathsPercent', asc);
  }

  sortByPeakPopulation(asc = true) {
    this.sortByProp('population', asc);
  }

  sortByPeakRecoveries(asc = true) {
    this.sortByProp('peakRecoveries', asc);
  }

  sortByPeakRecoveriesPercent(asc = true) {
    this.sortByProp('peakRecoveriesPercent', asc);
  }
}

export function createTimeSeriesCount(): TimeSeriesCount {
  return {
    active: 0,
    confirmed: 0,
    deaths: 0,
    newConfirmed: 0,
    newDeaths: 0,
    recoveries: 0,
    projectionReverseDeath: 0,
  };
}
