import { historicalEventsByCountry } from '../country-data';
import { ITimeSeries } from '../data.interfaces';
import { createYmdString } from '../../utility';

export function getEventFrom(ts: ITimeSeries, day: number) {
  const historicalEvents =
    historicalEventsByCountry[ts.countryCode().toUpperCase()];
  if (historicalEvents === undefined) {
    return;
  }
  const ymdString = createYmdString(ts.dates()[day]);
  const event = historicalEvents[ymdString];
  ``;
  if (event === undefined) {
    return;
  }
  return event;
}

export function getEventMarker(ts: ITimeSeries, day: number) {
  const event = getEventFrom(ts, day);
  if (event === undefined) {
    return event;
  }
  return {
    color: event.colour,
    marker: event.size ? { size: event.size } : undefined,
  };
}
