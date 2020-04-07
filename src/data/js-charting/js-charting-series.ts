export interface JsChartingSeriesPoint {
  [key: string]: any;
  x: Date | number;
  y: Date | number;
}

export interface JsChartingSeries {
  [key: string]: any;
  color?: string;
  line?: { color: string };
  name: string;
  points: JsChartingSeriesPoint[];
  type?: string;
}

export function buildJsChartingSeries(name: string) {
  const series = createJsChartingSeriesData(name);

  const seriesBuilder = {
    addPoint(
      x: Date | number,
      y: Date | number,
      spreadIn: { [key: string]: any } = {}
    ) {
      series.points.push({
        x,
        y,
        ...spreadIn,
      });
      return seriesBuilder;
    },
    colour(colour: string) {
      this.setProp('color', colour);
      return seriesBuilder;
    },
    lineColour(colour: string) {
      this.setProp('line', { color: colour });
      return seriesBuilder;
    },
    setProp(prop: string, value: any) {
      series[prop] = value;
      return seriesBuilder;
    },
    type(type: string) {
      series.type = type;
      return seriesBuilder;
    },
    collect() {
      return series;
    },
  };
  return seriesBuilder;
}

function createJsChartingSeriesData(name: string): JsChartingSeries {
  return {
    name,
    points: [],
  };
}
