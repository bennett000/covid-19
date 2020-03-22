import { Component, h } from 'preact';
import { route } from 'preact-router';
import { Button } from '../components/button';
import { ITimeSeriesArray } from '../interfaces';
import {
  rowEven,
  rowOdd,
  rowHighlight,
  fullSize,
  flexCol,
  flexItem95,
  flex,
  flexItem60,
} from '../constants';
import { ButtonToggle } from '../components/button-toggle';
import { SelectMultiple } from '../components/select-multiple';
import { noop } from '@ch1/utility';
import { Select } from '../components/select';

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
    columns: number[];
    isConfigOpen: boolean;
    showAll: boolean;
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
      columns: [1, 3, 5, 7, 9],
      isConfigOpen: false,
      showAll: true,
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

  toggleConfig(v: boolean) {
    this.setState({
      ...this.state,
      isConfigOpen: v,
    });
  }

  toggleShowAll() {
    this.setState({
      ...this.state,
      showAll: this.state.showAll ? false : true,
    });
  }

  onChangeColumns(column: number) {
    if (this.state.columns.indexOf(column) === -1) {
      if (this.state.columns.length < 7) {
        this.setState({
          ...this.state,
          columns: this.state.columns.concat([column]),
        });
      } else {
        this.setState({
          ...this.state,
          columns: this.state.columns.slice(0),
        });
      }
    } else {
      this.setState({
        ...this.state,
        columns: this.state.columns.filter(i => i !== column),
      });
    }
  }

  render() {
    const width = `width: ${100 / (this.state.columns.length || 1)}%;`;
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <section className={this.state.isConfigOpen ? flexItem60 : flexItem95}>
          <table
            style={`height: ${
              this.state.isConfigOpen ? 83 : 90
            }%; width: 100%;`}
          >
            <thead>
              <tr>
                {header.map((t, i) =>
                  i === 0 || this.state.columns.indexOf(i) > -1 ? (
                    <th style={width} onClick={() => this.clickHeader(t)}>
                      {t.label}
                    </th>
                  ) : (
                    ''
                  )
                )}
              </tr>
            </thead>
            <tbody style="height: 100%; overflow: auto;">
              {this.props.timeSeries.map((ts, i) => {
                if (ts.counts().length < 1) {
                  return '';
                }
                if (this.state.showAll === false) {
                  if (this.props.countryIndexes.indexOf(i) === -1) {
                    return '';
                  }
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
                    {this.state.columns.indexOf(1) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(ts.lastActive())}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.state.columns.indexOf(2) > -1 ? (
                      <td style={width}>
                        {this.formatDecimal(ts.lastActivePercent(), 3)}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.state.columns.indexOf(3) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(ts.lastConfirmed())}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.state.columns.indexOf(4) > -1 ? (
                      <td style={width}>
                        {this.formatDecimal(ts.lastConfirmedPercent(), 3)}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.state.columns.indexOf(5) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(ts.lastDeaths())}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.state.columns.indexOf(6) > -1 ? (
                      <td style={width}>
                        {this.formatDecimal(ts.lastDeathsPercent(), 4)}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.state.columns.indexOf(7) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(ts.lastRecoveries())}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.state.columns.indexOf(8) > -1 ? (
                      <td style={width}>
                        {this.formatDecimal(ts.lastRecoveriesPercent(), 3)}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.state.columns.indexOf(9) > -1 ? (
                      <td style={width}>
                        {this.formatDecimal(ts.lastMortality(), 2)}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.state.columns.indexOf(10) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(ts.population())}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.state.columns.indexOf(11) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(
                          ts.populationDensity() === null
                            ? 0
                            : ts.populationDensity()
                        ) + '/km2'}
                      </td>
                    ) : (
                      ''
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <section>
          <section className={flex}>
            <ButtonToggle
              labelTrue="✗ Enlarge Table"
              labelFalse="⚙️ Configure Table"
              onClick={this.toggleConfig.bind(this)}
              state={this.state.isConfigOpen}
            />
            <Button label="Chart" onClick={() => route('/')} />
          </section>
          {this.state.isConfigOpen ? (
            <section className={flex}>
              <SelectMultiple
                onChange={noop as any}
                onClick={v => this.onChangeColumns(v + 1)}
                options={header.map(item => item.label).slice(1)}
                selected={this.state.columns.map(c => c - 1)}
              ></SelectMultiple>
              <Select
                onChange={this.toggleShowAll.bind(this)}
                options={['Show All', 'Only Selected']}
                selected={this.state.showAll ? 0 : 1}
              ></Select>
            </section>
          ) : (
            ''
          )}
        </section>
      </section>
    );
  }
}
