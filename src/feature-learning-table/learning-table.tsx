import { Component, h } from 'preact';
import { route } from 'preact-router';
import { Button } from '../components/button';
import { ITimeSeriesArray } from '../interfaces';
import {
  rowEven,
  rowOdd,
  rowHighlight,
  fullSize,
  flex,
  flexCol,
  flexItem95,
  flexItem5,
} from '../constants';

const header = [
  {
    label: 'Region',
    sort: 'sortByCountry',
  },
  {
    label: 'Active',
    sort: 'sortByActive',
  },
  {
    label: 'Active %',
    sort: 'sortByActivePercent',
  },
  {
    label: 'Confirmed',
    sort: 'sortByConfirmed',
  },
  {
    label: 'Confirmed %',
    sort: 'sortByConfirmedPercent',
  },
  {
    label: 'Deaths',
    sort: 'sortByDeaths',
  },
  {
    label: 'Deaths %',
    sort: 'sortByDeathsPercent',
  },
  {
    label: 'Recoveries',
    sort: 'sortByRecoveries',
  },
  {
    label: 'Recoveries %',
    sort: 'sortByRecoveriesPercent',
  },
  {
    label: 'Mortality',
    sort: 'sortByMortality',
  },
  {
    label: 'Population',
    sort: 'sortByPopulation',
  },
  {
    label: 'Population Density',
    sort: 'sortByPopulationDensity',
  },
];

export class LearningTable extends Component<
  {
    countryIndexes: number[];
    selectCountry: (countryIndex: number) => any;
    timeSeries: ITimeSeriesArray;
  },
  {
    sortByActive: boolean;
    sortByActivePercent: boolean;
    sortByConfirmed: boolean;
    sortByConfirmedPercent: boolean;
    sortByDeaths: boolean;
    sortByDeathsPercent: boolean;
    sortByRecoveries: boolean;
    sortByRecoveriesPercent: boolean;
    sortByPopulation: boolean;
    SortByPopulationDensity: boolean;
  }
> {
  constructor() {
    super();
    this.state = {
      sortByActive: true,
      sortByActivePercent: true,
      sortByConfirmed: true,
      sortByConfirmedPercent: true,
      sortByDeaths: true,
      sortByDeathsPercent: true,
      sortByRecoveries: true,
      sortByRecoveriesPercent: true,
      sortByPopulation: true,
      SortByPopulationDensity: true,
    };
  }

  formatNumber(value: number) {
    return value.toLocaleString();
  }

  formatDecimal(value: number, decimals = 2) {
    return value.toFixed(decimals);
  }

  formatPercent(value: number, decimals = 2) {
    return this.formatDecimal(value, decimals) + '%';
  }

  clickHeader(t: { label: string; sort: string }) {
    this.props.timeSeries[t.sort](this.state[t.sort]);
    this.setState({
      ...this.state,
      [t.sort]: this.state[t.sort] ? false : true,
    });
  }

  render() {
    const width = `width: ${100 / header.length}%;`;
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <section className={flexItem95}>
          <table style="height: 90%;">
            <thead>
              <tr>
                {header.map(t => (
                  <th style={width} onClick={() => this.clickHeader(t)}>
                    {t.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody style="height: 100%; overflow: auto;">
              {this.props.timeSeries.map((ts, i) => {
                if (ts.counts().length < 1) {
                  return '';
                }
                const name =
                  ts.country() + (ts.state() ? ', ' + ts.state() : '');
                const rowParity = i % 2 === 0 ? rowEven : rowOdd;
                const rowClass =
                  this.props.countryIndexes.indexOf(i) > -1
                    ? rowHighlight + ' ' + rowParity
                    : rowParity;
                return (
                  <tr
                    className={rowClass}
                    onClick={() => this.props.selectCountry(i)}
                  >
                    <td style={width}>{name}</td>
                    <td style={width}>{this.formatNumber(ts.lastActive())}</td>
                    <td style={width}>
                      {this.formatDecimal(ts.lastActivePercent(), 3)}
                    </td>
                    <td style={width}>
                      {this.formatNumber(ts.lastConfirmed())}
                    </td>
                    <td style={width}>
                      {this.formatDecimal(ts.lastConfirmedPercent(), 3)}
                    </td>
                    <td style={width}>{this.formatNumber(ts.lastDeaths())}</td>
                    <td style={width}>
                      {this.formatDecimal(ts.lastDeathsPercent(), 4)}
                    </td>
                    <td style={width}>
                      {this.formatNumber(ts.lastRecoveries())}
                    </td>
                    <td style={width}>
                      {this.formatDecimal(ts.lastRecoveriesPercent(), 3)}
                    </td>
                    <td style={width}>
                      {this.formatDecimal(ts.lastMortality(), 2)}
                    </td>
                    <td style={width}>{this.formatNumber(ts.population())}</td>
                    <td style={width}>
                      {this.formatNumber(
                        ts.populationDensity() === null
                          ? 0
                          : ts.populationDensity()
                      ) + '/km2'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <section className={flexItem5}>
          <Button label="Chart" onClick={() => route('/')} />
        </section>
      </section>
    );
  }
}
