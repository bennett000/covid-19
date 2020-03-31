export type SelectOptions = (SelectOptionsWithIndex | string)[];
export interface SelectOptionsWithIndex {
  index: number | string;
  name: string;
}

export interface ChartPoint {
  index?: number;
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
  confirmedVsRecentState: ConfirmedVsRecentState;
  countryKeys: string[];
  timeVsCountsState: TimeVsCountsState;
  tableState: TableState;
  routePath: string;
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
  sortByPeakConfirmed: boolean;
  sortByPeakConfirmedPercent: boolean;
  sortByPeakDeaths: boolean;
  sortByPeakDeathsPercent: boolean;
  sortByPeakRecoveries: boolean;
  sortByPeakRecoveriesPercent: boolean;
  sortByPeakNewConfirmed: boolean;
  sortByPeakNewDeaths: boolean;
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
  newConfirmed: number;
  newDeaths: number;
  recoveries: number;
  projectionReverseDeath: number;
}

export interface LocationSeries extends Location {
  countryCode: string;
  counts: TimeSeriesCount[];
  dates: Date[];
  key: string;
  stateCode: string;
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
  lastNewConfirmed(): number;
  lastNewDeaths(): number;

  peakActive(): number;
  peakActivePercent(): number;
  peakConfirmed(): number;
  peakConfirmedPercent(): number;
  peakDeaths(): number;
  peakDeathsPercent(): number;
  peakRecoveries(): number;
  peakRecoveriesPercent(): number;
  peakMortality(): number;
  peakNewConfirmed(): number;
  peakNewDeaths(): number;

  country(): string;
  countryCode(): string;
  countryName(): string;
  counts(): TimeSeriesCount[];
  dates(): Date[];
  key(): string;
  locale(): string;
  population(): number;
  populationDensity(): null | number;
  state(): string;
  stateCode(): string;

  formatName(): string;
}

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
