import { createReducer, spreadPayloadIfNew } from './redux-utility';

describe('createReducer', () => {
  it('returns default state if reducer not found and existing state is unknown', () => {
    const reducer = createReducer('foo', {});
    expect(reducer(undefined, { type: 'bar' })).toBe('foo');
  });

  it('returns existing state if reducer not found', () => {
    const reducer = createReducer('foo', {});
    expect(reducer('baz', { type: 'bar' })).toBe('baz');
  });

  it('uses a reducer if it exists', () => {
    const reducer = createReducer('foo', { bar: () => 'bop' });
    expect(reducer('baz', { type: 'bar' })).toBe('bop');
  });

  it('supports dependency injection', () => {
    const reducer = createReducer(
      'foo',
      { bar: (dep: string) => () => dep },
      'injection'
    );
    expect(reducer('baz', { type: 'bar' })).toBe('injection');
  });

  it('supports mixed dependency injection', () => {
    const reducer = createReducer(
      'foo',
      { bar: (dep: string) => () => dep, bop: () => 'biz' },
      'injection'
    );
    expect(reducer('baz', { type: 'bar' })).toBe('injection');
    expect(reducer('baz', { type: 'bop' })).toBe('biz');
  });

  describe('spreadPayloadIfNew', () => {
    it('returns the same object if the payload is an equal primitive', () => {
      const state = { foo: 'bar' };
      expect(
        spreadPayloadIfNew(state, 'foo')(state, { payload: 'bar' } as any)
      ).toBe(state);
    });

    it('returns a new updated object i f the payload is a new primitive', () => {
      const state = { foo: 'bar' };
      const updated = spreadPayloadIfNew(state, 'foo')(state, {
        payload: 'foo',
      } as any);
      expect(updated).not.toBe(state);
      expect(updated.foo).toBe('foo');
    });
  });
});
