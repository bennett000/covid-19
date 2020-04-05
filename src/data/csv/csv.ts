import { backslash, comma, doubleQuote, newLine } from '../../constants';

export abstract class Csv {
  static rowStringToArray(csvRow: string): string[] {
    const chars = csvRow.split('');

    const state = {
      buffer: '',
      isEscape: false,
      isInQuote: false,
    };

    const toggleQuoteState = () => {
      if (state.isInQuote) {
        state.isInQuote = false;
      } else {
        state.isInQuote = true;
      }
    };

    const toggleEscape = () => {
      if (state.isEscape) {
        state.isEscape = false;
      } else {
        state.isEscape = true;
      }
    };

    return chars.reduce((arr: any[], el: string, i: number, c: string[]) => {
      if (el === doubleQuote) {
        if (state.isEscape) {
          state.buffer += el;
          toggleEscape();
        } else {
          toggleQuoteState();
        }
        return arr;
      }
      if (el === backslash) {
        if (state.isEscape) {
          state.buffer += el;
          toggleEscape();
        } else {
          toggleEscape();
        }
        return arr;
      }
      if (el === comma) {
        if (state.isInQuote) {
          state.buffer += el;
        } else {
          arr.push(state.buffer);
          state.buffer = '';
        }
        return arr;
      }
      state.buffer += el;
      if (i === c.length - 1) {
        arr.push(state.buffer);
        state.buffer = '';
      }
      return arr;
    }, []);
  }
  protected headerStrings: string[] = [];
  protected readonly newLine = newLine;
  private parsedData: string[][] = [];

  protected constructor(
    protected hasHeader: boolean,
    protected string: string
  ) {}

  private parse(): string[][] {
    const splitString = this.string.split(this.newLine);

    this.headerStrings = this.hasHeader
      ? Csv.rowStringToArray(splitString[0])
      : this.headerStrings;

    this.parsedData = (this.hasHeader ? splitString.slice(1) : splitString)
      .map(Csv.rowStringToArray)
      .filter(row => row.length);

    return this.parsedData;
  }

  parsed() {
    if (this.parsedData.length === 0) {
      this.parse();
    }
    return this.parsedData;
  }

  toString() {
    return this.string;
  }
}
