export type SelectOptions = (SelectOptionsWithIndex | string)[];
export interface SelectOptionsWithIndex {
  index: number;
  name: string;
}

export interface ChartPoint {
  index: number;
  x: Date | number;
  y: number;
}

export interface ChartSeries {
  name: string;
  points: ChartPoint[];
}

export interface ITimeSeriesArray extends Array<ITimeSeries> {
  clone(): ITimeSeriesArray;
  sortByActive(): void;
  sortByActivePercent(): void;
  sortByConfirmed(): void;
  sortByConfirmedPercent(): void;
  sortByCountry(): void;
  sortByDeaths(): void;
  sortByDeathsPercent(): void;
  sortByPopulation(): void;
  sortByPopulationDensity(): void;
  sortByRecoveries(): void;
  sortByRecoveriesPercent(): void;
}

export interface AppState {
  countries: SelectOptionsWithIndex[];
  currentSeries: ChartSeries[];
  data: ITimeSeriesArray;
  dataPromise: Promise<JhuIntegratedData>;
  countryIndexes: number[];
  lineGraphState: LineGraphState;
  tableState: TableState;
  routePath: string;
}

export interface LineGraphState {
  dataSetIndexes: number[];
  byMetric: number;
  countryFilter: string;
  isConfigOpen: boolean;
  mode: number;
  scaleType: number;
  showStates: boolean;
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
  sortByRecoveries: boolean;
  sortByRecoveriesPercent: boolean;
  sortByPopulation: boolean;
  sortByPopulationDensity: boolean;
}

export interface Location {
  country: string;
  locale: string;
  population: number;
  populationDensity: null | number;
  state: string;
}
export interface JhuTimeSeries extends Location {
  timeSeries: number[];
}

export type JhuTimeSeriesHeader = Date[];
export type JhuSet = [JhuTimeSeriesHeader, JhuTimeSeries[]];

export interface TimeSeriesCount {
  active: number;
  confirmed: number;
  deaths: number;
  recoveries: number;
  projectionReverseDeath: number;
}

export interface LocationSeries extends Location {
  counts: TimeSeriesCount[];
  dates: Date[];
  index: number;
}
export interface ITimeSeries {
  lastActive(): number;
  lastActivePercent(): number;
  lastConfirmed(): number;
  lastConfirmedPercent(): number;
  lastDeaths(): number;
  lastDeathsPercent(): number;
  lastRecoveries(): number;
  lastRecoveriesPercent(): number;
  lastMortality(): number;

  country(): string;
  countryName(): string;
  counts(): TimeSeriesCount[];
  dates(): Date[];
  index(): number;
  locale(): string;
  population(): number;
  populationDensity(): null | number;
  state(): string;

  // peakActive(): number;
  // peakConfirmed(): number;
  // peakDeaths(): number;
  // peakMortality(): number;
  // peakRecoveries(): number;
}

export interface JhuIntegratedData {
  countries: SelectOptionsWithIndex[];
  timeSeries: ITimeSeriesArray;
}

export type TimeSeriesType =
  | 'active'
  | 'confirmed'
  | 'deaths'
  | 'recoveries'
  | 'projectionReverseDeath';

export interface MenuProp {
  labels: string[];
  onClick(selected: number): any;
  selected: number;
}
