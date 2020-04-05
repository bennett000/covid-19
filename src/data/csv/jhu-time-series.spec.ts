import { CsvJhuTimeSeries } from './jhu-time-series';

describe('jhu time series', () => {
  describe('counts', () => {
    it('returns the values from the fifth column on as integers', () => {
      expect(
        CsvJhuTimeSeries.create(
          's,c,x,y,d0,d1,d2,d3\na,b,c,d,1,2,3,4,5'
        ).counts()
      ).toEqual([[1, 2, 3, 4, 5]]);
    });

    it('returns the counts values lazily', () => {
      const csv = CsvJhuTimeSeries.create(
        's,c,x,y,d0,d1,d2,d3\na,b,c,d,1,2,3,4,5'
      );
      expect((csv as any).countsData).toEqual([]);
      const counts = csv.counts();
      expect((csv as any).countsData).toEqual(counts);
    });

    it('stores the counts values', () => {
      const csv = CsvJhuTimeSeries.create(
        's,c,x,y,d0,d1,d2,d3\na,b,c,d,1,2,3,4,5'
      );
      expect((csv as any).countsData).toEqual([]);
      const counts = csv.counts();
      csv.counts();
      expect((csv as any).countsData).toBe(counts);
    });
  });

  describe('dates', () => {
    it('returns the dates part of the header lazily', () => {
      const csv = CsvJhuTimeSeries.create(
        's,c,x,y,d0,d1,d2,d3\na,b,c,d,1,2,3,4,5'
      );
      expect((csv as any).datesData).toEqual([]);
      const dates = csv.dates();
      expect((csv as any).datesData).toEqual(dates);
    });

    it('stores the dates part of the header', () => {
      const csv = CsvJhuTimeSeries.create('s,c,x,y,0,1,2,3\na,b,c,d,1,2,3,4,5');
      expect((csv as any).datesData).toEqual([]);
      const dates = csv.dates();
      csv.dates();
      expect((csv as any).datesData).toBe(dates);
    });
  });

  describe('is', () => {
    it('can detect if something is or is not a CsvJhuTimeSeries', () => {
      expect(CsvJhuTimeSeries.is({})).toBe(false);
    });
  });

  describe('onEachRow', () => {
    it('provides a simple iterator', () => {
      const csv = CsvJhuTimeSeries.create(
        's,c,x,y,0,1,2,3\na,b,c,d,1,2,3,4,5\ne,f,g,h,6,7,8,9,0'
      );
      let didRun = 0;

      csv.onEachRow((row, index) => {
        if (index === 0) {
          expect(row.country()).toBe('b');
          expect(row.state()).toBe('a');
          expect(row.counts()).toEqual([1, 2, 3, 4, 5]);
          didRun += 1;
        }
        if (index === 1) {
          expect(row.country()).toBe('f');
          expect(row.state()).toBe('e');
          expect(row.counts()).toEqual([6, 7, 8, 9, 0]);
          didRun += 1;
        }
      });
      expect(didRun).toBe(2);
    });
  });
});
