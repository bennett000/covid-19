import { ITimeSeries, ITimeSeriesArray } from './data.interfaces';
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

  sortByActive: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastActive'
  );
  sortByActivePercent: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastActivePercent'
  );
  sortByConfirmed: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastConfirmed'
  );
  sortByNewConfirmed: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastNewConfirmed'
  );
  sortByPeakNewConfirmed: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakNewConfirmed'
  );
  sortByConfirmedPercent: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastConfirmedPercent'
  );
  sortByPeakActive: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakActive'
  );
  sortByPeakActivePercent: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakActivePercent'
  );
  sortByPeakConfirmed: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakConfirmed'
  );
  sortByPeakConfirmedPercent: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakConfirmedPercent'
  );
  sortByDeaths: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastDeaths'
  );
  sortByNewDeaths: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastNewDeaths'
  );
  sortByPeakNewDeaths: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakNewDeaths'
  );
  sortByMortality: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastMortality'
  );
  sortByDeathsPercent: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastDeathsPercent'
  );
  sortByPopulation: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'population'
  );
  sortByPopulationDensity: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'populationDensity'
  );
  sortByRecoveries: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastRecoveries'
  );
  sortByRecoveriesPercent: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'lastRecoveriesPercent'
  );
  sortByPeakDeaths: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakDeaths'
  );
  sortByPeakMortality: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakMortality'
  );
  sortByPeakDeathsPercent: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakDeathsPercent'
  );
  sortByPeakPopulation: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'population'
  );
  sortByPeakRecoveries: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakRecoveries'
  );
  sortByPeakRecoveriesPercent: (asc?: boolean) => void = this.sortByProp.bind(
    this,
    'peakRecoveriesPercent'
  );

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
      return 0;
    });
  }
}
