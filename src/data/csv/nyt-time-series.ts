import { Csv } from './csv';

export class CsvNytTimeSeries extends Csv {
  static is(thing: any): thing is CsvNytTimeSeries {
    return thing instanceof CsvNytTimeSeries;
  }

  static create(string: string) {
    return new CsvNytTimeSeries(string);
  }

  private constructor(string: string) {
    super(true, string);
  }
}
