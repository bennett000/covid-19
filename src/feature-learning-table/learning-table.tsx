import { Component, h } from 'preact';
import {
  ITimeSeriesArray,
  TableState,
  MenuProp,
  ITimeSeries,
} from '../interfaces';
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
import { Strings } from '../i18n';

export class LearningTable extends Component<{
  countryKeys: string[];
  menu: MenuProp;
  onChange: (lgs: TableState) => any;
  selectCountry: (countryIndex: string) => any;
  state: TableState;
  strings: Strings;
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
      if (this.props.state.columns.length < 6) {
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
    const header = [
      {
        label: this.props.strings.learningTable.titles.region,
        sort: 'sortByCountry',
        value: (ts: ITimeSeries) =>
          ts.country() + (ts.state() ? ', ' + ts.state() : ''),
      },
    ].concat(
      [
        {
          label: this.props.strings.learningTable.titles.active,
          sort: 'sortByActive',
          value: (ts: ITimeSeries) => ts.lastActive().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.activePercent,
          sort: 'sortByActivePercent',
          value: (ts: ITimeSeries) =>
            ts
              .lastActivePercent()
              .toFixed(3)
              .toLocaleString() + '%',
        },
        {
          label: this.props.strings.learningTable.titles.confirmed,
          sort: 'sortByConfirmed',
          value: (ts: ITimeSeries) => ts.lastConfirmed().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.confirmedPercent,
          sort: 'sortByConfirmedPercent',
          value: (ts: ITimeSeries) =>
            ts
              .lastConfirmedPercent()
              .toFixed(3)
              .toLocaleString() + '%',
        },
        {
          label: this.props.strings.learningTable.titles.deaths,
          sort: 'sortByDeaths',
          value: (ts: ITimeSeries) => ts.lastDeaths().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.deathsPercent,
          sort: 'sortByDeathsPercent',
          value: (ts: ITimeSeries) =>
            ts
              .lastDeathsPercent()
              .toFixed(6)
              .toLocaleString() + '%',
        },
        {
          label: this.props.strings.learningTable.titles.recoveries,
          sort: 'sortByRecoveries',
          value: (ts: ITimeSeries) => ts.lastRecoveries().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.recoveriesPercent,
          sort: 'sortByRecoveriesPercent',
          value: (ts: ITimeSeries) =>
            ts
              .lastRecoveriesPercent()
              .toFixed(3)
              .toLocaleString() + '%',
        },
        {
          label: this.props.strings.learningTable.titles.mortality,
          sort: 'sortByMortality',
          value: (ts: ITimeSeries) => ts.lastMortality().toLocaleString() + '%',
        },
        {
          label: this.props.strings.learningTable.titles.newConfirmed,
          sort: 'sortByNewConfirmed',
          value: (ts: ITimeSeries) => ts.lastNewConfirmed().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.newDeaths,
          sort: 'sortByNewDeaths',
          value: (ts: ITimeSeries) => ts.lastNewDeaths().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.peakActive,
          sort: 'sortByPeakActive',
          value: (ts: ITimeSeries) => ts.peakActive().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.peakActivePercent,
          sort: 'sortByPeakActivePercent',
          value: (ts: ITimeSeries) =>
            ts
              .peakActivePercent()
              .toFixed(3)
              .toLocaleString() + '%',
        },
        {
          label: this.props.strings.learningTable.titles.peakConfirmed,
          sort: 'sortByPeakConfirmed',
          value: (ts: ITimeSeries) => ts.peakConfirmed().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.peakConfirmedPercent,
          sort: 'sortByPeakConfirmedPercent',
          value: (ts: ITimeSeries) =>
            ts
              .peakConfirmedPercent()
              .toFixed(3)
              .toLocaleString() + '%',
        },
        {
          label: this.props.strings.learningTable.titles.peakDeaths,
          sort: 'sortByPeakDeaths',
          value: (ts: ITimeSeries) => ts.peakDeaths().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.peakDeathsPercent,
          sort: 'sortByPeakDeathsPercent',
          value: (ts: ITimeSeries) =>
            ts
              .peakDeathsPercent()
              .toFixed(6)
              .toLocaleString() + '%',
        },
        {
          label: this.props.strings.learningTable.titles.peakRecoveries,
          sort: 'sortByPeakRecoveries',
          value: (ts: ITimeSeries) => ts.peakRecoveries().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.peakRecoveriesPercent,
          sort: 'sortByPeakRecoveriesPercent',
          value: (ts: ITimeSeries) =>
            ts
              .peakDeathsPercent()
              .toFixed(3)
              .toLocaleString() + '%',
        },
        {
          label: this.props.strings.learningTable.titles.peakMortality,
          sort: 'sortByPeakMortality',
          value: (ts: ITimeSeries) => ts.peakMortality().toLocaleString() + '%',
        },
        {
          label: this.props.strings.learningTable.titles.peakNewConfirmed,
          sort: 'sortByPeakNewConfirmed',
          value: (ts: ITimeSeries) => ts.peakNewConfirmed().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.peakNewDeaths,
          sort: 'sortByPeakNewDeaths',
          value: (ts: ITimeSeries) => ts.peakNewDeaths().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.population,
          sort: 'sortByPopulation',
          value: (ts: ITimeSeries) => ts.population().toLocaleString(),
        },
        {
          label: this.props.strings.learningTable.titles.populationDensity,
          sort: 'sortByPopulationDensity',
          value: (ts: ITimeSeries) => ts.populationDensity().toLocaleString(),
        },
      ].sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      })
    );

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
              {this.props.timeSeries.map((ts, tsIndex) => {
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
                const rowParity = tsIndex % 2 === 0 ? rowEven : rowOdd;
                const rowClass =
                  this.props.countryKeys.indexOf(ts.key()) > -1
                    ? rowHighlight + ' ' + rowParity
                    : rowParity;
                return (
                  <tr
                    className={rowClass}
                    onClick={() => this.props.selectCountry(ts.key())}
                  >
                    {header.map((t, i) =>
                      i === 0 || this.props.state.columns.indexOf(i) > -1 ? (
                        <td style={width}>{t.value(ts)}</td>
                      ) : (
                        ''
                      )
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
              labelTrue={this.props.strings.learningTable.enlarge}
              labelFalse={this.props.strings.learningTable.configure}
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
                options={[
                  this.props.strings.learningTable.showAll,
                  this.props.strings.learningTable.showOnlySelected,
                ]}
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
