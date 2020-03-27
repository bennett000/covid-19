import { Component, h } from 'preact';
import { ITimeSeriesArray, TableState, MenuProp } from '../interfaces';
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
import { Menu } from '../components/menu';

const header = [
  {
    label: 'Region',
    sort: 'sortByCountry',
  },
  {
    label: 'Active*',
    sort: 'sortByActive',
  },
  {
    label: 'Active* %',
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
    label: 'Recoveries*',
    sort: 'sortByRecoveries',
  },
  {
    label: 'Recoveries* %',
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

export class LearningTable extends Component<{
  countryKeys: string[];
  menu: MenuProp;
  onChange: (lgs: TableState) => any;
  selectCountry: (countryIndex: string) => any;
  state: TableState;
  timeSeries: ITimeSeriesArray;
}> {
  constructor() {
    super();
    this.state = {};
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
    this.props.timeSeries[t.sort](this.props.state[t.sort]);
    this.props.onChange({
      ...this.props.state,
      [t.sort]: this.props.state[t.sort] ? false : true,
    });
  }

  toggleConfig(v: boolean) {
    this.props.onChange({
      ...this.props.state,
      isConfigOpen: v,
    });
  }

  toggleShowAll() {
    this.props.onChange({
      ...this.props.state,
      showAll: this.props.state.showAll ? false : true,
    });
  }

  onChangeColumns(column: number) {
    if (this.props.state.columns.indexOf(column) === -1) {
      if (this.props.state.columns.length < 7) {
        this.props.onChange({
          ...this.props.state,
          columns: this.props.state.columns.concat([column]),
        });
      } else {
        this.props.onChange({
          ...this.props.state,
          columns: this.props.state.columns.slice(0),
        });
      }
    } else {
      this.props.onChange({
        ...this.props.state,
        columns: this.props.state.columns.filter(i => i !== column),
      });
    }
  }

  render() {
    const tbody =
      window.document.body.clientHeight *
      (this.props.state.isConfigOpen ? 0.6 : 0.82);
    const width = `width: ${100 / (this.props.state.columns.length || 1)}%;`;
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <section
          className={this.props.state.isConfigOpen ? flexItem60 : flexItem95}
        >
          <table
            style={`height: ${
              this.props.state.isConfigOpen ? 83 : 90
            }%; width: 100%;`}
          >
            <thead>
              <tr>
                {header.map((t, i) =>
                  i === 0 || this.props.state.columns.indexOf(i) > -1 ? (
                    <th style={width} onClick={() => this.clickHeader(t)}>
                      {t.label}
                    </th>
                  ) : (
                    ''
                  )
                )}
              </tr>
            </thead>
            <tbody style={`overflow: auto; max-height: ${tbody}px;`}>
              {this.props.timeSeries.map((ts, i) => {
                if (ts.counts().length < 1) {
                  return '';
                }
                if (this.props.state.showAll === false) {
                  if (this.props.countryKeys.indexOf(ts.key()) === -1) {
                    return '';
                  }
                }
                const name =
                  ts.country() + (ts.state() ? ', ' + ts.state() : '');
                const rowParity = i % 2 === 0 ? rowEven : rowOdd;
                const rowClass =
                  this.props.countryKeys.indexOf(ts.key()) > -1
                    ? rowHighlight + ' ' + rowParity
                    : rowParity;
                return (
                  <tr
                    className={rowClass}
                    onClick={() => this.props.selectCountry(ts.key())}
                  >
                    <td style={width}>{name}</td>
                    {this.props.state.columns.indexOf(1) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(ts.lastActive())}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.props.state.columns.indexOf(2) > -1 ? (
                      <td style={width}>
                        {this.formatDecimal(ts.lastActivePercent(), 3)}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.props.state.columns.indexOf(3) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(ts.lastConfirmed())}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.props.state.columns.indexOf(4) > -1 ? (
                      <td style={width}>
                        {this.formatDecimal(ts.lastConfirmedPercent(), 3)}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.props.state.columns.indexOf(5) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(ts.lastDeaths())}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.props.state.columns.indexOf(6) > -1 ? (
                      <td style={width}>
                        {this.formatDecimal(ts.lastDeathsPercent(), 4)}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.props.state.columns.indexOf(7) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(ts.lastRecoveries())}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.props.state.columns.indexOf(8) > -1 ? (
                      <td style={width}>
                        {this.formatDecimal(ts.lastRecoveriesPercent(), 3)}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.props.state.columns.indexOf(9) > -1 ? (
                      <td style={width}>
                        {this.formatDecimal(ts.lastMortality(), 2)}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.props.state.columns.indexOf(10) > -1 ? (
                      <td style={width}>
                        {this.formatNumber(ts.population())}
                      </td>
                    ) : (
                      ''
                    )}
                    {this.props.state.columns.indexOf(11) > -1 ? (
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
              state={this.props.state.isConfigOpen}
            />
            <Menu config={this.props.menu}></Menu>
          </section>
          {this.props.state.isConfigOpen ? (
            <section className={flex}>
              <SelectMultiple
                onChange={noop as any}
                onClick={v => this.onChangeColumns(parseInt(v + '', 10) + 1)}
                options={header.map(item => item.label).slice(1)}
                selected={this.props.state.columns.map(c => c - 1)}
              ></SelectMultiple>
              <Select
                onChange={this.toggleShowAll.bind(this)}
                options={['Show All', 'Only Selected']}
                selected={this.props.state.showAll ? 0 : 1}
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
