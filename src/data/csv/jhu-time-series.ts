import { Csv } from './csv';
import { createDate } from '../../utility';

export class CsvJhuTimeSeries extends Csv {
  static is(thing: any): thing is CsvJhuTimeSeries {
    return thing instanceof CsvJhuTimeSeries;
  }

  static create(string: string) {
    return new CsvJhuTimeSeries(string);
  }

  private datesData: Date[] = [];
  private countsData: number[][] = [];

  private constructor(string: string) {
    super(true, string);
  }

  counts() {
    if (this.countsData.length < 1) {
      this.countsData = this.parsed().map(row =>
        row.slice(4).map(string => parseInt(string, 10))
      );
    }
    return this.countsData;
  }

  dates() {
    if (this.datesData.length < 1) {
      // we wont have headerStrings if a parse has not been done
      this.parsed();
      this.datesData = this.headerStrings.slice(4).map(createDate);
    }
    return this.datesData;
  }

  onEachRow(
    callback: (
      row: {
        country: () => string;
        counts: () => number[];
        state: () => string;
      },
      index: number
    ) => any
  ) {
    this.parsed().forEach((row, i) => {
      callback(
        {
          country: () => row[1],
          counts: () => this.counts()[i].slice(0),
          state: () => row[0],
        },
        i
      );
    });
  }
}
