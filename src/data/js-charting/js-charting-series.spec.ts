import { buildJsChartingSeries } from './js-charting-series';

describe('js charting series', () => {
  it('simplifies creating charting series', () => {
    const series = buildJsChartingSeries('Canada')
      .setProp('foo', 'bar')
      .addPoint(1, 2)
      .addPoint(3, 4, { z: 13 })
      .collect();

    expect(series).toEqual({
      foo: 'bar',
      name: 'Canada',
      points: [
        {
          x: 1,
          y: 2,
        },
        {
          x: 3,
          y: 4,
          z: 13,
        },
      ],
    });
  });

  it('can directly set colour', () => {
    expect(
      buildJsChartingSeries('foo')
        .colour('red')
        .collect()
    ).toEqual({
      name: 'foo',
      color: 'red',
      points: [],
    });
  });

  it('can directly set a line colour', () => {
    expect(
      buildJsChartingSeries('foo')
        .lineColour('red')
        .collect()
    ).toEqual({
      name: 'foo',
      line: { color: 'red' },
      points: [],
    });
  });

  it('can directly set a type', () => {
    expect(
      buildJsChartingSeries('foo')
        .type('line')
        .collect()
    ).toEqual({
      name: 'foo',
      points: [],
      type: 'line',
    });
  });
});
