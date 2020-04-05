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
  peakMortality(): number;
  peakNewConfirmed(): number;
  peakNewDeaths(): number;

  country(): string;
  countryCode(): string;
  counts(): TimeSeriesCount[];
  dates(): Date[];
  key(): string;
  population(): number;
  populationDensity(): null | number;
  state(): string;
  stateCode(): string;

  formatName(): string;

  clone(): ITimeSeries;
  cloneAndAppend(counts: TimeSeriesCount[], dates: Date[]): ITimeSeries;

  forEachDay(
    callback: (
      timeSeriesCount: TimeSeriesCount,
      date: Date,
      index: number
    ) => any
  );
}

export interface ITimeSeriesArray extends Array<ITimeSeries> {
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
