import { ITimeSeries } from '../data.interfaces';
import { getEventFrom } from './chart-events';

export function createToolTip(
  ts: ITimeSeries,
  dataSetIndex: number,
  day: number,
  fromDay0 = -1,
  isProjection = false
) {
  const fp = (num: number) =>
    (num < 0.01 ? num.toFixed(6) : num.toFixed(2)).toLocaleString();
  const header =
    (isProjection ? '<b><i>*** PROJECTION ***</i><br/>' : '') +
    (fromDay0 < 0
      ? `<b>${ts.formatName()}</b> ` +
        ts.dates()[day].toLocaleDateString() +
        `(${ts.dates()[day].getUTCDay()})`
      : `<b>${ts.formatName()} Day ` +
        fromDay0 +
        '</b> (' +
        ts.dates()[day].toLocaleDateString() +
        ')') +
    `(${ts.dates()[day].getUTCDay()})` +
    '<br/> Population ' +
    ts.population().toLocaleString() +
    (ts.populationDensity() ? ` (${ts.populationDensity()}/km2)` : '');

  const footer = getEventTooltip(ts, day);

  return (
    header +
    '<br/><br/>' +
    [
      {
        index: 0,
        label: `Active ${ts.counts()[day].active.toLocaleString()} (${fp(
          (ts.counts()[day].active / ts.population()) * 100
        )} %)`,
      },
      {
        index: 1,
        label: `Confirmed ${ts.counts()[day].confirmed.toLocaleString()} (${fp(
          (ts.counts()[day].confirmed / ts.population()) * 100
        )} %)`,
      },
      {
        index: 2,
        label: `Deaths ${ts.counts()[day].deaths.toLocaleString()} (${fp(
          (ts.counts()[day].deaths / ts.population()) * 100
        )} %)`,
      },
      {
        index: 3,
        label: `Recoveries ${ts
          .counts()
          [day].recoveries.toLocaleString()} (${fp(
          (ts.counts()[day].recoveries / ts.population()) * 100
        )} %)`,
      },
    ]
      .sort((a, b) => {
        if (a.index === dataSetIndex) {
          return -1;
        }
        if (b.index === dataSetIndex) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      })
      .map(({ label }, i) => (i === 0 ? `<b>${label}</b>` : label))
      .join('<br/>') +
    '<br/><br/>' +
    [
      `New Cases: <b>${ts.counts()[day].newConfirmed.toLocaleString()}</b>`,
      `New Deaths: <b>${ts.counts()[day].newDeaths.toLocaleString()}</b>`,
    ].join('<br/>') +
    footer
  );
}

function getEventTooltip(ts: ITimeSeries, day: number): string {
  const event = getEventFrom(ts, day);
  if (event === undefined) {
    return '';
  }
  return `<br/><br/>Event: ${event.description}`;
}
