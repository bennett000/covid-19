import * as seirState from './seir.state';

describe('seir state', () => {
  it('generates reducers as expected', () => {
    const reducer = seirState.reducers[seirState.events.updatedR0];
    const action = seirState.actions.updatedR0;
    expect(reducer({ r0: 2.0 } as any, action(57)).r0).toBe(57);
  });
});
