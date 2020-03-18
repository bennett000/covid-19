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

export interface AppState {
  countries: SelectOptionsWithIndex[];
  currentSeries: ChartSeries[];
  dataPromise: Promise<JhuIntegratedData>;
  lineGraphState: LineGraphState;
}

export interface LineGraphState {
  dataSetIndexes: number[];
  byMetric: number;
  countryIndexes: number[];
  mode: number;
  scaleType: number;
  showStates: boolean;
  startDate: string;
}

export type JhuCsvRow = (number | string | Date)[];
export type JhuCsv = JhuCsvRow[];

export interface JhuParsedData {
  countries: SelectOptionsWithIndex[];
  dataSets: JhuCsv[];
  points: ChartSeries[][];
}

export interface JhuIntegratedData {
  countries: SelectOptionsWithIndex[];
  dataSets: JhuCsv[];
  points: ChartSeries[][][];
}
