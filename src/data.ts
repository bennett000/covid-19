import { SelectOptionsWithIndex, ChartSeries, AppState } from './interfaces';
import { Dictionary } from '@ch1/utility';
import { Strings } from './i18n';
import { CsvNytTimeSeries } from './data/csv/nyt-time-series';
import { TimeSeriesCollection } from './data/time-series/time-series-collection';
import { CsvJhuTimeSeries } from './data/csv/jhu-time-series';
import { TimeSeriesArray } from './data/time-series/time-series-array';
import { ITimeSeriesArray } from './data/data.interfaces';
import { ChartSelector } from './data/js-charting/chart-selector';

const jhuUrls = [
  // updated from previous deprecated files (https://github.com/CSSEGISandData/COVID-19/commit/203881b83c3820521f5af7cafb0d15367e415652)
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv',
];

const nytUrl =
  'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv';

export function fetchData(
  strings: Strings
): Promise<{
  countries: SelectOptionsWithIndex[];
  dictionary: TimeSeriesCollection;
  timeSeries: ITimeSeriesArray;
}> {
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
    .then(ts => ts.freeze())
    .then(extractCountries);
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

function extractCountries(collection: TimeSeriesCollection) {
  const countries: SelectOptionsWithIndex[] = collection
    .reduce((arr, location) => {
      const name = location.formatName();
      arr.push({ index: location.key(), name });
      return arr;
    }, [])
    .sort(sortByProp('name'));

  const tsa = TimeSeriesArray.create();
  collection.forEach(tsc => tsa.push(tsc));

  return { countries, dictionary: collection, timeSeries: tsa };
}

function sortByProp(prop: string) {
  return (a: any, b: any) => {
    if (a[prop] < b[prop]) {
      return -1;
    }
    if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  };
}

export function selectData(cache: Dictionary<ChartSeries>, state: AppState) {
  /** @todo move away from dataPromise model */
  return state.dataPromise.then(({ countries, dictionary }) => {
    const cs = ChartSelector.create(dictionary);
    const series = cs.select(state);

    return {
      countries,
      series,
    };
  });
}
