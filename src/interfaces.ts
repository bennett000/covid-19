import { ITimeSeriesArray } from './data/data.interfaces';
export * from './data/data.interfaces';

export type SelectOptions = (SelectOptionsWithIndex | string)[];
export interface SelectOptionsWithIndex {
  index: number | string;
  name: string;
}

export interface ChartPoint {
  tooltip?: any;
  index?: number;
  x: Date | number;
  y: number;
}

export interface ChartSeries {
  name: string;
  points: ChartPoint[];
}

export interface AppState {
  countries: SelectOptionsWithIndex[];
  currentSeries: ChartSeries[];
  data: ITimeSeriesArray;
  dataPromise: Promise<JhuIntegratedData>;
  confirmedVsRecentState: ConfirmedVsRecentState;
  countryKeys: string[];
  timeVsCountsState: TimeVsCountsState;
  tableState: TableState;
  routePath: string;
  seirState: InputSeirState;
}

export interface ConfirmedVsRecentState {
  countryFilter: string;
  isConfigOpen: boolean;
  showStates: boolean;
}

export interface TimeVsCountsState {
  dataSetIndexes: number[];
  byMetric: number;
  countryFilter: string;
  isConfigOpen: boolean;
  mode: number;
  scaleType: number;
  showStates: boolean;
  showSeirState: boolean;
  startDate: string;
}

export interface TableState {
  columns: number[];
  isConfigOpen: boolean;
  showAll: boolean;
  sortByActive: boolean;
  sortByActivePercent: boolean;
  sortByConfirmed: boolean;
  sortByConfirmedPercent: boolean;
  sortByDeaths: boolean;
  sortByDeathsPercent: boolean;
  sortByNewConfirmed: boolean;
  sortByNewDeaths: boolean;
  sortByRecoveries: boolean;
  sortByRecoveriesPercent: boolean;
  sortByPopulation: boolean;
  sortByPopulationDensity: boolean;
  sortByPeakActive: boolean;
  sortByPeakActivePercent: boolean;
  sortByPeakNewConfirmed: boolean;
  sortByPeakNewDeaths: boolean;
}
export interface InputSeirState {
  daysToProject: number;
  r0: number;
  incubationPeriod: number;
  durationOfInfection: number;
  fatalityRate: number;
  timeFromIncubationToDeath: number;
  lengthOfSevereHospitalStay: number;
  recoveryTimeForMildCases: number;
  hospitalizationRate: number;
  timeFromIncubationToHospital: number;
}
export interface JhuTimeSeries extends Location {
  timeSeries: number[];
}

export type JhuTimeSeriesHeader = Date[];
export type JhuSet = [JhuTimeSeriesHeader, JhuTimeSeries[]];

export interface JhuIntegratedData {
  countries: SelectOptionsWithIndex[];
  timeSeries: ITimeSeriesArray;
}

export type TimeSeriesType =
  | 'active'
  | 'confirmed'
  | 'deaths'
  | 'newConfirmed'
  | 'newDeaths'
  | 'recoveries'
  | 'projectionReverseDeath';

export interface MenuProp {
  disable?: boolean;
  labels: string[];
  onClick(selected: number): any;
  selected: number;
}

export interface TimelineEvent {
  history?: TimelineEventHistory;
  seir?: TimelineEventSeir;
  ymdString: string;
}

export interface TimelineEventSeir {
  r0: number;
  fatalityRate: number;
}

export interface TimelineEventHistory {
  colour?: string;
  description: string;
  npi: string[];
  size?: number;
  state?: string | string[];
  urls: string[];
}

export interface ToString {
  toString(): string;
}
