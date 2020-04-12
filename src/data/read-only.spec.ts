import { ReadOnlyAble } from './read-only';

describe('readonly able', () => {
  it('makes itself read only', () => {
    class Foo extends ReadOnlyAble {
      bar = { name: 'foo' };
    }
    const f = new Foo();
    f.freeze();
    expect(() => (f.bar = { name: 'biff' })).toThrow();
    expect(() => (f.bar.name = 'baz')).toThrow();
  });
});
