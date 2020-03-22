import Router from 'preact-router';
import { Component, h, render as preactRender } from 'preact';
import { LineGraph } from './feature-line-graph/line-graph';
import { createState, loadState, saveState } from './state';
import {
  AppState,
  ChartSeries,
  SelectOptionsWithIndex,
  LineGraphState,
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

  reload() {
    this.props.reset();
    this.setState({
      dataPromise: fetchData().then(d => {
        this.selectAndUpdate();
        return d;
      }),
    });
  }

  render() {
    return (
      <div className={`${fullSize} ${flexCol}`}>
        <Header />
        <Router>
          <LineGraph
            path={'/'}
            countries={this.state.countries}
            currentSeries={this.state.currentSeries}
            onChange={this.lineGraphState.bind(this)}
            key="0"
            reload={this.reload.bind(this)}
            state={this.state.lineGraphState}
          ></LineGraph>
          <LearningTable
            key="1"
            path={'/table'}
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
