import {
  ITimeSeries,
  TimeSeriesCount,
  TimeSeriesType,
} from './data.interfaces';
import { LocationSeries } from './data.interfaces.local';
import { cloneFlat } from '../utility';

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

export class TimeSeries implements ITimeSeries {
  static create(locationSeries: LocationSeries): TimeSeries {
    return new TimeSeries(locationSeries);
  }

  private constructor(private lsData: LocationSeries) {}

  private lastValue(prop: TimeSeriesType) {
    if (this.lsData.counts.length < 1) {
      return 0;
    }
    return this.lsData.counts[this.lsData.counts.length - 1][prop];
  }

  private lastPercent(prop: TimeSeriesType) {
    if (this.lsData.counts.length < 1) {
      return 0;
    }
    if (this.lsData.population < 1) {
      return 0;
    }
    return (
      (this.lsData.counts[this.lsData.counts.length - 1][prop] /
        this.lsData.population) *
      100
    );
  }

  private peakValue(prop: TimeSeriesType) {
    if (this.lsData.counts.length < 1) {
      return 0;
    }
    return this.lsData.counts.reduce((max, next) => {
      if (next[prop] && next[prop] > max) {
        return next[prop];
      }
      return max;
    }, 0);
  }

  private peakPercent(prop: TimeSeriesType) {
    if (this.lsData.counts.length < 1) {
      return 0;
    }
    if (this.lsData.population < 1) {
      return 0;
    }
    return this.lsData.counts.reduce((max, next) => {
      if (next[prop]) {
        const div = (next[prop] / this.lsData.population) * 100;
        if (div > max) {
          return div;
        }
      }
      return max;
    }, 0);
  }

  private getProp(prop: string) {
    return this.lsData[prop];
  }

  // deep clone of the object, excluding date objects
  clone() {
    return TimeSeries.create({
      ...this.lsData,
      counts: this.lsData.counts.map(cloneFlat),
      dates: this.lsData.dates.slice(0),
    });
  }

  cloneAndAppend(counts: TimeSeriesCount[], dates: Date[]) {
    return TimeSeries.create({
      ...this.lsData,
      counts: this.lsData.counts.map(cloneFlat).concat(counts),
      dates: this.lsData.dates.concat(dates),
    });
  }

  lastActive: () => number = this.lastValue.bind(this, 'active');
  lastActivePercent: () => number = this.lastPercent.bind(this, 'active');
  lastConfirmed: () => number = this.lastValue.bind(this, 'confirmed');
  lastConfirmedPercent: () => number = this.lastPercent.bind(this, 'confirmed');
  lastDeaths: () => number = this.lastValue.bind(this, 'deaths');
  lastDeathsPercent: () => number = this.lastPercent.bind(this, 'deaths');
  lastRecoveries: () => number = this.lastValue.bind(this, 'recoveries');
  lastRecoveriesPercent: () => number = this.lastPercent.bind(
    this,
    'recoveries'
  );
  lastNewConfirmed: () => number = this.lastValue.bind(this, 'newConfirmed');
  lastNewDeaths: () => number = this.lastValue.bind(this, 'newDeaths');
  peakActive: () => number = this.peakValue.bind(this, 'active');
  peakActivePercent: () => number = this.peakPercent.bind(this, 'active');
  peakConfirmed: () => number = this.peakValue.bind(this, 'confirmed');
  peakConfirmedPercent: () => number = this.peakPercent.bind(this, 'confirmed');
  peakDeaths: () => number = this.peakValue.bind(this, 'deaths');
  peakDeathsPercent: () => number = this.peakPercent.bind(this, 'deaths');
  peakRecoveries: () => number = this.peakValue.bind(this, 'recoveries');
  peakRecoveriesPercent: () => number = this.peakPercent.bind(
    this,
    'recoveries'
  );
  peakNewConfirmed: () => number = this.peakValue.bind(this, 'newConfirmed');
  peakNewDeaths: () => number = this.peakValue.bind(this, 'newDeaths');

  lastMortality() {
    if (this.lastConfirmed() < 1) {
      return 0;
    }
    return (this.lastDeaths() / this.lastConfirmed()) * 100;
  }
  peakMortality() {
    if (this.peakConfirmed() < 1) {
      return 0;
    }
    return (this.peakDeaths() / this.peakConfirmed()) * 100;
  }

  counts: () => TimeSeriesCount[] = this.getProp.bind(this, 'counts');
  dates: () => Date[] = this.getProp.bind(this, 'dates');
  country: () => string = this.getProp.bind(this, 'country');
  countryCode: () => string = this.getProp.bind(this, 'countryCode');
  key: () => string = this.getProp.bind(this, 'key');
  population: () => number = this.getProp.bind(this, 'population');
  populationDensity: () => number = this.getProp.bind(
    this,
    'populationDensity'
  );
  state: () => string = this.getProp.bind(this, 'state');
  stateCode: () => string = this.getProp.bind(this, 'stateCode');

  formatName() {
    return this.country() + (this.state() ? ', ' + this.state() : '');
  }

  forEachDay(
    callback: (
      timeSeriesCount: TimeSeriesCount,
      date: Date,
      index: number
    ) => any
  ) {
    this.counts().forEach((tsc, i) => {
      callback(tsc, this.dates()[i], i);
    });
  }
}
