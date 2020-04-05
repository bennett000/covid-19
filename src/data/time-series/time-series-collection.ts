import { Dictionary, objEach, objReduce } from '@ch1/utility';
import {
  getPopulation,
  getPopulationDensity,
  getStatePopulation,
} from '../country-data';
import {
  ITimeSeries,
  TimeSeriesCount,
  TimeSeriesType,
} from './time-series.interfaces';
import { createTimeSeriesCount, TimeSeries } from './time-series';
import { generateDateDictionary } from '../../utility';
import { CsvNytTimeSeries } from '../csv/nyt-time-series';
import { LocationSeries } from './time-series.interfaces.local';
import { CsvJhuTimeSeries } from '../csv/jhu-time-series';
import {
  usaCode,
  recoveryDays,
  reverseDeathProjectionDefaults,
} from '../../constants';
import {
  statesToCodes,
  codesToStates,
  countriesToCodes,
} from '../country-data';

function manuallyAdjustJhu(dict: Dictionary<LocationSeries>) {
  // there will be some initial data that needs correction to keep things organized

  // there is no top level entry for Canadian confirmed cases or deaths, this minimal recovery data
  delete dict.CA;

  return dict;
}

export class TimeSeriesCollection {
  static create(data: Dictionary<ITimeSeries> = {}) {
    return new TimeSeriesCollection(data);
  }

  static from(
    data: CsvJhuTimeSeries[] | CsvNytTimeSeries
  ): TimeSeriesCollection {
    if (CsvNytTimeSeries.is(data)) {
      const lsd = convertNytCsvToStructured(data);
      return TimeSeriesCollection.create(
        locationSeriesDictionaryToTimeSeriesDictionary(lsd)
      );
    }

    if (
      Array.isArray(data) &&
      data.reduce(
        (s, thing) => (s === false ? s : CsvJhuTimeSeries.is(thing)),
        true
      )
    ) {
      const lsd = manuallyAdjustJhu(createFromJhuCsvs(data));
      return TimeSeriesCollection.create(
        locationSeriesDictionaryToTimeSeriesDictionary(lsd)
      );
    }

    throw new TypeError(
      'TimeSeries: from: data is unexpected type: ' + typeof data
    );
  }

  // will overwrite, last item wins
  static merge(collections: TimeSeriesCollection[]): TimeSeriesCollection {
    const newData: Dictionary<ITimeSeries> = {};
    collections.forEach(tsc => {
      tsc.forEach(ts => {
        newData[ts.key()] = ts.clone();
      });
    });
    return TimeSeriesCollection.create(newData);
  }

  private static totalsString = 'Total';
  private static worldString = 'World';

  private hasInterpolated = false;
  private hasSummedRegions = false;
  private hasSummedWorld = false;

  private constructor(private dictionary: Dictionary<ITimeSeries> = {}) {}

  private sumAllWorld() {
    const world = {
      country: TimeSeriesCollection.worldString,
      countryCode: TimeSeriesCollection.worldString,
      dates: Object.keys(generateDateDictionary()).map(ds => new Date(ds)),
      key: TimeSeriesCollection.worldString,
      population: 0,
      populationDensity: 0,
      state: '',
      stateCode: '',
      counts: [],
    };
    objEach(this.dictionary, location => {
      if (
        location.state() &&
        location.state() !== TimeSeriesCollection.totalsString
      ) {
        return;
      }
      world.population += location.population();
      location.forEachDay((tsc, _, i) => {
        if (world.counts[i]) {
          world.counts[i] = addCounts(world.counts[i], tsc);
        } else {
          world.counts[i] = {
            ...tsc,
          };
        }
      });
    });

    this.dictionary[TimeSeriesCollection.worldString] = TimeSeries.create(
      world
    );
  }

  private sumAllRegions() {
    objEach(this.dictionary, location => {
      if (location.state() === TimeSeriesCollection.totalsString) {
        // skip totals
        return;
      }
      if (location.state()) {
        if (this.dictionary[location.countryCode()]) {
          // skip if there's already a total like in UK's case
          return;
        }
        const totalKey =
          location.countryCode() + '.' + TimeSeriesCollection.totalsString;
        if (this.dictionary[totalKey] === undefined) {
          this.dictionary[totalKey] = TimeSeries.create({
            country: location.country(),
            countryCode: location.countryCode(),
            dates: location.dates().slice(0),
            key: totalKey,
            population: getPopulation(location.country()),
            populationDensity: getPopulationDensity(location.country()),
            state: TimeSeriesCollection.totalsString,
            stateCode: '',
            counts: [],
          });
        }
        location.forEachDay((tsc, _, i) => {
          if (this.dictionary[totalKey].counts()[i]) {
            this.dictionary[totalKey].counts()[i] = addCounts(
              this.dictionary[totalKey].counts()[i],
              tsc
            );
          } else {
            this.dictionary[totalKey].counts()[i] = tsc;
          }
        });
      }
    });
  }

  private interpolate() {
    objEach(this.dictionary, c => {
      c.forEachDay((tcs, _date, i) => {
        const arr = c.counts();
        tcs.recoveries = getRecoveryDays(tcs, i, arr, recoveryDays);
        tcs.active = tcs.confirmed - tcs.deaths - tcs.recoveries;
        tcs.projectionReverseDeath = reverseDeathProjection(tcs);
        tcs.newConfirmed =
          tcs.confirmed - (arr[i - 1] ? arr[i - 1].confirmed || 0 : 0);
        tcs.newDeaths = tcs.deaths - (arr[i - 1] ? arr[i - 1].deaths || 0 : 0);
      });
    });
  }

  country(code: string) {
    if (this.dictionary[code]) {
      return this.dictionary[code];
    }
  }

  interpolateRecoveriesActiveCasesAndNewProps() {
    if (this.hasInterpolated) {
      return this;
    }
    this.interpolate();
    this.hasInterpolated = true;
    return this;
  }

  sumRegions() {
    if (this.hasSummedRegions) {
      return this;
    }
    this.sumAllRegions();
    this.hasSummedRegions = true;
    return this;
  }

  sumWorld() {
    if (this.hasSummedWorld) {
      return this;
    }
    this.sumAllWorld();
    this.hasSummedWorld = true;
    return this;
  }

  forEach(callback: (ts: ITimeSeries, i: number) => any) {
    objEach(this.dictionary, (ts, _, i) => {
      callback(ts, i);
    });
  }

  reduce<T>(
    callback: (result: T, ts: ITimeSeries, i: number) => T,
    initialResult: T
  ) {
    return objReduce(
      this.dictionary,
      (s, t, _, i) => callback(s, t, i),
      initialResult
    );
  }
}

export function nytRowsToDict(
  rows: string[][]
): Dictionary<Dictionary<TimeSeriesCount>> {
  const dict: Dictionary<Dictionary<TimeSeriesCount>> = {};
  rows.forEach(row => {
    if (!row[0] || !row[1]) {
      return;
    }

    const stateCode = statesToCodes.US[row[1]];
    if (!stateCode) {
      return;
    }
    const key = keyFromUsState(stateCode);

    if (dict[row[0]] === undefined) {
      dict[row[0]] = {};
    }

    if (dict[row[0]][key] === undefined) {
      dict[row[0]][key] = createTimeSeriesCount();
    }

    if (row[3]) {
      dict[row[0]][key].confirmed = parseInt(row[3], 10);
    }

    if (row[4]) {
      dict[row[0]][key].deaths = parseInt(row[4], 10);
    }
  });
  return dict;
}

export function convertNytTimeSeriesDictToStateDict(
  byTime: Dictionary<Dictionary<TimeSeriesCount>>
): [Date[], Dictionary<TimeSeriesCount[]>] {
  const byState: Dictionary<TimeSeriesCount[]> = {};

  // account for JHU D.C. code
  const states = Object.keys(codesToStates.US).filter(code => {
    if (code === 'D.C.') {
      return false;
    }
    return true;
  });
  const dateDict = generateDateDictionary();
  const dates: Date[] = [];
  objEach(dateDict, (timeSeriesIndex, dateString) => {
    dates.push(new Date(dateString));
    states.forEach(stateCode => {
      const key = keyFromUsState(stateCode);

      if (byState[key] === undefined) {
        byState[key] = [];
      }

      if (byTime[dateString] && byTime[dateString][key]) {
        byState[key][timeSeriesIndex] = byTime[dateString][key];
      } else {
        const last = byState[key][timeSeriesIndex - 1];
        if (last) {
          byState[key][timeSeriesIndex] = {
            ...last,
          };
        } else {
          byState[key][timeSeriesIndex] = createTimeSeriesCount();
        }
      }
    });
  });
  return [dates, byState];
}

function convertNytCsvToStructured(
  csv: CsvNytTimeSeries
): Dictionary<LocationSeries> {
  const rows = sortNytRows(csv.parsed());

  const timeSeriesDict = nytRowsToDict(rows);
  const [dates, byState] = convertNytTimeSeriesDictToStateDict(timeSeriesDict);
  const dict: Dictionary<LocationSeries> = {};

  objEach(byState, (counts, key) => {
    const stateCode = key.split('.')[1];
    const state = codesToStates.US[stateCode];
    dict[key] = {
      country: usaCode,
      countryCode: usaCode,
      dates,
      key,
      population: getStatePopulation(usaCode, state),
      populationDensity: getPopulationDensity(usaCode, state),
      state,
      stateCode,
      counts,
    };
  });

  return dict;
}

function sortNytRows(rows: string[][]) {
  rows.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });
  return rows;
}

function keyFromUsState(code: string) {
  return usaCode + '.' + code;
}

export function createFromJhuCsvs(csvs: CsvJhuTimeSeries[]) {
  const dict: Dictionary<LocationSeries> = {};
  const createOnEach = (prop: TimeSeriesType) => row => {
    const countryCode = countriesToCodes[row.country()];
    if (!countryCode) {
      /** @todo re-think log */
      // log(strings.data.log.countryNotFound, c.country);
      return;
    }
    let code = countryCode;
    let stateCode = '';
    if (row.state()) {
      const states = statesToCodes[row.country()];
      if (!states) {
        // don't bother logging these
        return;
      }
      stateCode = states[row.state()];
      if (!stateCode) {
        /** @todo re-think log */
        // log(strings.data.log.stateNotFound, c.country + ',', c.state);
        return;
      }
      code = code + '.' + stateCode;
    }
    if (dict[code]) {
      row.counts().map((value, i) => {
        if (dict[code].counts[i] === undefined) {
          /** @todo re-think log */
          // log(strings.data.log.unexpectedLength, prop);
          dict[code].counts[i] = createTimeSeriesCount();
        }
        dict[code].counts[i][prop] = value;
      });
    } else {
      dict[code] = {
        country: row.country(),
        countryCode,
        counts: row.counts().map(value => {
          const tsc = createTimeSeriesCount();
          tsc[prop] = value;
          return tsc;
        }),
        dates: csvs[0].dates(),
        key: code,
        population: getPopulation(row.country(), row.state()),
        populationDensity: getPopulationDensity(row.country(), row.state()),
        state: row.state(),
        stateCode,
      };
    }
  };

  if (csvs[0]) {
    csvs[0].onEachRow(createOnEach('confirmed'));
  }
  if (csvs[1]) {
    csvs[1].onEachRow(createOnEach('deaths'));
  }
  if (csvs[2]) {
    csvs[2].onEachRow(createOnEach('recoveries'));
  }

  return dict;
}

export function locationSeriesDictionaryToTimeSeriesDictionary(
  lsd: Dictionary<LocationSeries>
): Dictionary<ITimeSeries> {
  return objReduce(
    lsd,
    (tsd: Dictionary<ITimeSeries>, ls, key) => {
      tsd[key] = TimeSeries.create(ls);
      return tsd;
    },
    {}
  );
}

export function addCounts(
  a: TimeSeriesCount,
  b: TimeSeriesCount
): TimeSeriesCount {
  return {
    active: a.active + b.active,
    confirmed: a.confirmed + b.confirmed,
    deaths: a.deaths + b.deaths,
    newConfirmed: a.newConfirmed + b.newConfirmed,
    newDeaths: a.newDeaths + b.newDeaths,
    recoveries: a.recoveries + b.recoveries,
    projectionReverseDeath: a.projectionReverseDeath + b.projectionReverseDeath,
  };
}

export function getRecoveryDays(
  count: TimeSeriesCount,
  i: number,
  arr: TimeSeriesCount[],
  rdays
) {
  if (count.confirmed) {
    if (count.recoveries < 1) {
      if (arr[i - rdays]) {
        if (arr[i - rdays - 1]) {
          const rprev = arr[i - rdays - 1].confirmed;
          const rcurr = arr[i - rdays].confirmed;
          const diff = rcurr - rprev;

          if (arr[i - 1]) {
            return diff + arr[i - 1].recoveries;
          } else {
            return diff;
          }
        }
      }
    } else {
      return count.recoveries;
    }
  } else {
    /** @todo figure out logging */
    // if (count.deaths) {
    //   log(strings.data.log.deathNoConfirmed);
    // }
    // if (count.recoveries) {
    //   log(strings.data.log.recoveryNoConfirmed);
    // }
  }
  return 0;
}

export function reverseDeathProjection(day: TimeSeriesCount) {
  // projection is based on https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca
  // https://docs.google.com/spreadsheets/d/1R25ygRLahhSNP2N-lnas_9a9aRWGCtAt3_sCYDoRyAU/edit#gid=0
  const deaths = day.deaths;
  const numberOfCasesCausingDeath =
    deaths / reverseDeathProjectionDefaults.fatalityRate;
  const numberOfDoubles =
    reverseDeathProjectionDefaults.daysFromInfectionToDeath /
    reverseDeathProjectionDefaults.doublingTime;

  return numberOfCasesCausingDeath * Math.pow(2, numberOfDoubles);
}
