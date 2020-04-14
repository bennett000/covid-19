import { Component, h } from 'preact';
import { connect } from 'react-redux';
import {
  rowEven,
  rowOdd,
  rowHighlight,
  fullSize,
  flexCol,
  flexItem95,
  flex,
  flexItem60,
  styles,
  borderCurved,
  padding,
  tableBorderCollapse,
  displayBlock,
  textAlignLeft,
} from '../../style';
import { ButtonToggle } from '../../components/input/button-toggle';
import { SelectMultiple } from '../../components/input/select-multiple';
import { noop } from '@ch1/utility';
import { Select } from '../../components/input/select';
import { Strings } from '../../../i18n';
import { ITimeSeriesArray, ITimeSeries } from '../../../data/data.interfaces';
import * as dataTableState from './data-table.state';
import * as countriesState from '../../containers/countries/countries.state';
import { MenuContainer } from '../../containers/menu/menu-container';

const thClasses = [borderCurved, padding, displayBlock, textAlignLeft].join(
  ' '
);
const tdClasses = [padding, displayBlock, textAlignLeft].join(' ');
class BaseDataTable extends Component<{
  clickedSortField: (field: string) => any;
  columns: number[];
  isConfigOpen: boolean;
  list: ITimeSeriesArray;
  selectedColumn: (column: number | number[]) => any;
  selectedCountry: (country: string) => any;
  selectedCountries: string[];
  showAll: boolean;
  strings: Strings;
  toggledConfig: () => any;
  toggledShowAll: () => any;
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

  render() {
    const header = [
      {
        label: this.props.strings.learningTable.titles.region,
        sort: 'sortByCountry',
        value: (ts: ITimeSeries) => ts.formatName(),
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
      (this.props.isConfigOpen ? 0.6 : 0.82);
    const width = `width: ${100 / (this.props.columns.length || 1)}%;`;
    return (
      <section className={`${fullSize} ${flexCol}`}>
        <section className={this.props.isConfigOpen ? flexItem60 : flexItem95}>
          <table
            style={`height: ${
              this.props.isConfigOpen ? 83 : 90
            }%; width: 100%;`}
            className={tableBorderCollapse}
          >
            <thead className={displayBlock}>
              <tr className={flex}>
                {header.map((t, i) =>
                  i === 0 || this.props.columns.indexOf(i) > -1 ? (
                    <th
                      className={thClasses}
                      style={width}
                      onClick={() => this.props.clickedSortField(t.sort)}
                    >
                      {t.label}
                    </th>
                  ) : (
                    ''
                  )
                )}
              </tr>
            </thead>
            <tbody
              className={displayBlock}
              style={`overflow: auto; max-height: ${tbody}px;`}
            >
              {this.props.list.map((ts, tsIndex) => {
                if (ts.counts().length < 1) {
                  return '';
                }
                const rowParity = tsIndex % 2 === 0 ? rowEven : rowOdd;
                const rowClass =
                  this.props.selectedCountries.indexOf(ts.key()) > -1
                    ? rowHighlight + ' ' + rowParity
                    : rowParity;
                return (
                  <tr
                    className={[rowClass, flex].join(' ')}
                    onClick={() => this.props.selectedCountry(ts.key())}
                  >
                    {header.map((t, i) =>
                      i === 0 || this.props.columns.indexOf(i) > -1 ? (
                        <td className={tdClasses} style={width}>
                          {t.value(ts)}
                        </td>
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
              classes={styles.button}
              labelTrue={this.props.strings.learningTable.enlarge}
              labelFalse={this.props.strings.learningTable.configure}
              onClick={this.props.toggledConfig}
              state={this.props.isConfigOpen}
            />
            <MenuContainer />
          </section>
          {this.props.isConfigOpen ? (
            <section className={flex}>
              <SelectMultiple
                classes={styles.selectBox}
                onChange={noop as any}
                onClick={v =>
                  this.props.selectedColumn(parseInt(v + '', 10) + 1)
                }
                options={header.map(item => item.label).slice(1)}
                selected={this.props.columns.map(c => c - 1)}
              ></SelectMultiple>
              <Select
                classes={styles.selectBox}
                onChange={this.props.toggledShowAll}
                options={[
                  this.props.strings.learningTable.showAll,
                  this.props.strings.learningTable.showOnlySelected,
                ]}
                selected={this.props.showAll ? 0 : 1}
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

export const DataTable = connect(
  state => ({
    columns: dataTableState.select.columns(state),
    isConfigOpen: dataTableState.select.isConfigOpen(state),
    list: dataTableState.select.list(state),
    selectedCountries: countriesState.select.selected(state),
    showAll: dataTableState.select.showAll(state),
    strings: state.strings,
  }),
  {
    clickedSortField: dataTableState.actions.clickedSortField,
    selectedColumn: dataTableState.actions.selectedColumn,
    selectedCountry: countriesState.actions.selectedCountry,
    toggledConfig: dataTableState.actions.toggledConfig,
    toggledShowAll: dataTableState.actions.toggledShowAll,
  }
)(BaseDataTable);
