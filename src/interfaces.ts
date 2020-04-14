export * from './data/data.interfaces';

export type SelectOptions = (SelectOptionsWithIndex | string)[];
export interface SelectOptionsWithIndex {
  index: number | string;
  name: string;
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
