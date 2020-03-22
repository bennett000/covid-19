import {
  ITimeSeries,
  LocationSeries,
  TimeSeriesType,
  ITimeSeriesArray,
} from './interfaces';
import { Dictionary } from '@ch1/utility';

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

  counts() {
    return this.data.counts;
  }
  dates() {
    return this.data.dates;
  }
  country() {
    return this.data.country;
  }
  countryName() {
    return this.data.country + (this.data.state ? ', ' + this.data.state : '');
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

  sortByActive(asc = true) {
    this.sortByProp('lastActive', asc);
  }

  sortByActivePercent(asc = true) {
    this.sortByProp('lastActivePercent', asc);
  }

  sortByConfirmed(asc = true) {
    this.sortByProp('lastConfirmed', asc);
  }

  sortByConfirmedPercent(asc = true) {
    this.sortByProp('lastConfirmedPercent', asc);
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
}
