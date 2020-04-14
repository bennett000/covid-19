import { SelectOptionsWithIndex } from './interfaces';
import { Strings } from './i18n';
import { CsvNytTimeSeries } from './data/csv/nyt-time-series';
import {
  TimeSeriesCollection,
  ITimeSeriesCollection,
} from './data/time-series/time-series-collection';
import { CsvJhuTimeSeries } from './data/csv/jhu-time-series';
import { TimeSeriesArray } from './data/time-series/time-series-array';
import { ITimeSeriesArray } from './data/data.interfaces';
import { ChartSelector } from './data/js-charting/chart-selector';
import { AppState } from './ui/store/store';

const jhuUrls = [
  // updated from previous deprecated files (https://github.com/CSSEGISandData/COVID-19/commit/203881b83c3820521f5af7cafb0d15367e415652)
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv',
];

const nytUrl =
  'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv';

export function fetchData(): Promise<ITimeSeriesCollection> {
  return Promise.all([
    Promise.all(jhuUrls.map(url => fetch(url)))
      .then(unwrapResponses)
      .then(jhuStringsToCsvs)
      .then(TimeSeriesCollection.from),
    fetch(nytUrl)
      .then(unwrapResponse)
      .then(CsvNytTimeSeries.create)
      .then(TimeSeriesCollection.from),
  ])
    .then(TimeSeriesCollection.merge)
    .then(ts => ts.interpolateRecoveriesActiveCasesAndNewProps())
    .then(ts => ts.sumRegions())
    .then(ts => ts.sumWorld())
    .then(ts => ts.freeze());
}

function jhuStringsToCsvs(strings: string[]) {
  return strings.map(string => CsvJhuTimeSeries.create(string));
}

function unwrapResponse(response: Response) {
  return response.text();
}

function unwrapResponses(responses: Response[]) {
  return Promise.all(responses.map(unwrapResponse));
}

export function selectData(state: AppState) {
  const cs = ChartSelector.create(state.timeSeriesCollection);
  return cs.select(state);
}
