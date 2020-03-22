import Router from 'preact-router';
import { Component, h, render as preactRender } from 'preact';
import { LineGraph } from './feature-line-graph/line-graph';
import { createState, loadState, saveState } from './state';
import {
  AppState,
  ChartSeries,
  SelectOptionsWithIndex,
  LineGraphState,
  TableState,
} from './interfaces';
import { selectData, fetchData } from './data';
import { log } from './utility';
import { Dictionary } from '@ch1/utility';
import { LearningTable } from './feature-learning-table/learning-table';
import { Header } from './components/header';
import { fullSize, flexCol } from './constants';

export class App extends Component<
  { cache: Dictionary<ChartSeries>; reset: () => any },
  AppState
> {
  constructor() {
    super();

    let state = loadState();
    if (!state) {
      log('No existing state');
      state = createState();
    }
    this.state = state;
    this.selectAndUpdate();
  }

  updateSelectState({
    countries,
    series,
  }: {
    countries: SelectOptionsWithIndex[];
    series: ChartSeries[];
  }) {
    this.setState({
      ...this.state,
      countries,
      currentSeries: series,
    });
  }

  selectAndUpdate() {
    this.state.dataPromise
      .then(({ timeSeries }) => {
        this.setState({
          ...this.state,
          data: timeSeries,
        });
        return selectData(this.props.cache, this.state);
      })
      .then(this.updateSelectState.bind(this))
      .then(() => saveState(this.state));
  }

  lineGraphState(lgs: LineGraphState) {
    this.setState({
      ...this.state,
      lineGraphState: lgs,
    });
    this.selectAndUpdate();
  }

  tableState(tableState: TableState) {
    this.setState({
      ...this.state,
      tableState,
    });
    this.selectAndUpdate();
  }

  reload() {
    this.props.reset();
    this.setState({
      ...this.state,
      dataPromise: fetchData().then(d => {
        this.selectAndUpdate();
        return d;
      }),
    });
  }

  clearCountries() {
    console.log('clear countries');
    this.setState({
      ...this.state,
      countryIndexes: [],
    });
    this.selectAndUpdate();
  }

  selectCountry(countryIndex: number) {
    if (this.state.countryIndexes.indexOf(countryIndex) > -1) {
      this.setState({
        ...this.state,
        countryIndexes: this.state.countryIndexes.filter(
          i => i !== countryIndex
        ),
      });
    } else {
      this.setState({
        ...this.state,
        countryIndexes: this.state.countryIndexes.concat([countryIndex]),
      });
    }
    this.selectAndUpdate();
  }

  render() {
    return (
      <div className={`${fullSize} ${flexCol}`}>
        <Header />
        <Router>
          <LineGraph
            path={'/'}
            clearCountries={this.clearCountries.bind(this)}
            countries={this.state.countries}
            countryIndexes={this.state.countryIndexes}
            currentSeries={this.state.currentSeries}
            onChange={this.lineGraphState.bind(this)}
            key="0"
            reload={this.reload.bind(this)}
            selectCountry={this.selectCountry.bind(this)}
            state={this.state.lineGraphState}
          ></LineGraph>
          <LearningTable
            countryIndexes={this.state.countryIndexes}
            key="1"
            onChange={this.tableState.bind(this)}
            path={'/table'}
            state={this.state.tableState}
            selectCountry={this.selectCountry.bind(this)}
            timeSeries={this.state.data}
          ></LearningTable>
        </Router>
      </div>
    );
  }
}

export function render(root: HTMLElement) {
  let cache: Dictionary<ChartSeries> = {};
  preactRender(<App cache={cache} reset={() => (cache = {})} />, root);
}
