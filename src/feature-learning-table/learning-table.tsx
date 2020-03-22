import { Component, h } from 'preact';
import { route } from 'preact-router';
import { Button } from '../components/button';
import { ITimeSeriesArray } from '../interfaces';

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
    return (
      <section>
        <Button label="Chart" onClick={() => route('/')} />
        <table>
          <tr>
            {header.map(t => (
              <th onClick={() => this.clickHeader(t)}>{t.label}</th>
            ))}
          </tr>
          {this.props.timeSeries.map(ts => {
            if (ts.counts().length < 1) {
              return '';
            }
            const name = ts.country() + (ts.state() ? ', ' + ts.state() : '');
            return (
              <tr>
                <td>{name}</td>
                <td>{this.formatNumber(ts.lastActive())}</td>
                <td>{this.formatDecimal(ts.lastActivePercent(), 3)}</td>
                <td>{this.formatNumber(ts.lastConfirmed())}</td>
                <td>{this.formatDecimal(ts.lastConfirmedPercent(), 3)}</td>
                <td>{this.formatNumber(ts.lastDeaths())}</td>
                <td>{this.formatDecimal(ts.lastDeathsPercent(), 4)}</td>
                <td>{this.formatNumber(ts.lastRecoveries())}</td>
                <td>{this.formatDecimal(ts.lastRecoveriesPercent(), 3)}</td>
                <td>{this.formatDecimal(ts.lastMortality(), 2)}</td>
                <td>{this.formatNumber(ts.population())}</td>
                <td>
                  {this.formatNumber(
                    ts.populationDensity() === null ? 0 : ts.populationDensity()
                  ) + '/km2'}
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    );
  }
}
