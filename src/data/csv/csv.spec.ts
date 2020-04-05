import { Csv } from './csv';

describe('csv class', () => {
  describe('rowStringToArray', () => {
    const { rowStringToArray } = Csv;
    it('converts "foo,bar" to "["foo", "bar"]"', () => {
      expect(rowStringToArray('foo,bar')).toEqual(['foo', 'bar']);
    });

    it('converts ""foo",bar" to "["foo", "bar"]"', () => {
      expect(rowStringToArray('"foo",bar')).toEqual(['foo', 'bar']);
    });

    it('converts ""foo, are you",bar" to "["foo, are you", "bar"]"', () => {
      expect(rowStringToArray('"foo, are you",bar')).toEqual([
        'foo, are you',
        'bar',
      ]);
    });

    it('converts ""foo, \\"are\\" you",bar" to "["foo, "are" you", "bar"]"', () => {
      expect(rowStringToArray('"foo, \\"are\\" you",bar')).toEqual([
        'foo, "are" you',
        'bar',
      ]);
    });

    it('converts ""foo, you\\me?",bar" to "["foo, you\\me?", "bar"]"', () => {
      expect(rowStringToArray('"foo, you\\\\me?",bar')).toEqual([
        'foo, you\\me?',
        'bar',
      ]);
    });
  });

  describe('parse', () => {
    class Impl extends Csv {
      static create(hasHeader: boolean, string: string) {
        return new Impl(hasHeader, string);
      }

      private constructor(hasHeader: boolean, string: string) {
        super(hasHeader, string);
      }
    }
    it('lazily parses', () => {
      const imp = Impl.create(false, 'foo,bar,baz');
      expect((imp as any).parsedData).toEqual([]);
      const parsed = imp.parsed();
      expect((imp as any).parsedData).toBe(parsed);
    });

    it('supports header rows', () => {
      const imp = Impl.create(true, 'Subject,Verb,Object\nfoo,bar,baz');
      expect(imp.parsed()).toEqual([['foo', 'bar', 'baz']]);
      expect((imp as any).headerStrings).toEqual(['Subject', 'Verb', 'Object']);
    });

    it('stores results', () => {
      const imp = Impl.create(false, 'foo,bar,baz');
      expect((imp as any).parsedData).toEqual([]);
      const parsed = imp.parsed();
      expect((imp as any).parsedData).toBe(parsed);
      imp.parsed();
      expect((imp as any).parsedData).toBe(parsed);
    });

    it('ignores empty rows', () => {
      const imp = Impl.create(
        false,
        'foo,bar,baz\nchar,delta\n\nepsilon,fargo'
      );
      expect(imp.parsed()).toEqual([
        ['foo', 'bar', 'baz'],
        ['char', 'delta'],
        ['epsilon', 'fargo'],
      ]);
    });

    it('returns the initial string', () => {
      const init = 'foo,bar,baz\nchar,delta\n\nepsilon,fargo';
      const imp = Impl.create(false, init);
      expect(imp.toString()).toBe(init);
    });
  });
});
