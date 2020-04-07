export { ITimeSeries } from './time-series';
export { ITimeSeriesArray } from './time-series-array';
export { ITimeSeriesCollection } from './time-series-collection';
export interface TimeSeriesCount {
  active: number;
  confirmed: number;
  deaths: number;
  newConfirmed: number;
  newDeaths: number;
  recoveries: number;
  projectionReverseDeath: number;
}

export type TimeSeriesType =
  | 'active'
  | 'confirmed'
  | 'deaths'
  | 'newConfirmed'
  | 'newDeaths'
  | 'recoveries'
  | 'projectionReverseDeath';
