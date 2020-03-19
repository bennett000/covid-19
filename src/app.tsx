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

export class App extends Component<{}, AppState> {
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
      .then(() => selectData(this.state))
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
    this.setState({
      dataPromise: fetchData().then(d => {
        this.selectAndUpdate();
        return d;
      }),
    });
  }

  render() {
    return (
      <Router>
        <LineGraph
          path={'/'}
          countries={this.state.countries}
          currentSeries={this.state.currentSeries}
          onChange={this.lineGraphState.bind(this)}
          reload={this.reload.bind(this)}
          state={this.state.lineGraphState}
        ></LineGraph>
      </Router>
    );
  }
}

export function render(root: HTMLElement) {
  preactRender(<App />, root);
}
