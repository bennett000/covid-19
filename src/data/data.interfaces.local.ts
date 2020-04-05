import { TimeSeriesCount } from './data.interfaces';

export interface Location {
  country: string;
  population: number;
  populationDensity: null | number;
  state: string;
}

export interface LocationSeries extends Location {
  countryCode: string;
  counts: TimeSeriesCount[];
  dates: Date[];
  key: string;
  stateCode: string;
}
