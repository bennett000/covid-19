import Router, { route } from 'preact-router';
import { Component, h, render as preactRender } from 'preact';
import { LineGraph } from './feature-line-graph/line-graph';
import { createState, loadState, saveState } from './state';
import {
  AppState,
  ChartSeries,
  SelectOptionsWithIndex,
  LineGraphState,
  MenuProp,
  TableState,
} from './interfaces';
import { selectData, fetchData } from './data';
import { log } from './utility';
import { Dictionary } from '@ch1/utility';
import { LearningTable } from './feature-learning-table/learning-table';
import { Header } from './components/header';
import { fullSize, flexCol, strings } from './constants';
import { Geography } from './feature-geography/geography';
import { About } from './feature-about/about';

export class App extends Component<
  { cache: Dictionary<ChartSeries>; reset: () => any },
  AppState
> {
  menu: MenuProp;

  constructor() {
    super();

    let state = loadState();
    if (!state) {
      log(strings.app.log.noState);
      state = createState();
    }
    this.state = state;
    this.selectAndUpdate();

    this.menu = {
      labels: strings.app.menu.map(s => s.name),
      onClick: (selected: number) => {
        const routePath =
          strings.app.menu[selected].route || strings.app.menu[0].route;
        this.setState({
          ...this.state,
          routePath,
        });
        this.menu.selected = selected;
        route(routePath);
        this.selectAndUpdate();
      },
      selected: strings.app.menu.reduce((s, n, i) => {
        if (n.route === this.state.routePath) {
          return i;
        }
        return s;
      }, 0),
    };
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
    this.setState({
      ...this.state,
      countryKeys: [],
    });
    this.selectAndUpdate();
  }

  selectCountry(countryKey: string) {
    if (this.state.countryKeys.indexOf(countryKey) > -1) {
      this.setState({
        ...this.state,
        countryKeys: this.state.countryKeys.filter(i => i !== countryKey),
      });
    } else {
      this.setState({
        ...this.state,
        countryKeys: this.state.countryKeys.concat([countryKey]),
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
            path={strings.app.menu[0].route}
            clearCountries={this.clearCountries.bind(this)}
            countries={this.state.countries}
            countryKeys={this.state.countryKeys}
            currentSeries={this.state.currentSeries}
            menu={this.menu}
            onChange={this.lineGraphState.bind(this)}
            key="0"
            reload={this.reload.bind(this)}
            selectCountry={this.selectCountry.bind(this)}
            state={this.state.lineGraphState}
          ></LineGraph>
          <LearningTable
            countryKeys={this.state.countryKeys}
            key="1"
            onChange={this.tableState.bind(this)}
            menu={this.menu}
            path={strings.app.menu[1].route}
            state={this.state.tableState}
            selectCountry={this.selectCountry.bind(this)}
            timeSeries={this.state.data}
          ></LearningTable>
          <Geography
            key="2"
            path={strings.app.menu[2].route}
            menu={this.menu}
            timeSeries={this.state.data}
          ></Geography>
          <About
            key="3"
            path={strings.app.menu[3].route}
            menu={this.menu}
          ></About>
        </Router>
      </div>
    );
  }
}

export function render(root: HTMLElement) {
  let cache: Dictionary<ChartSeries> = {};
  preactRender(<App cache={cache} reset={() => (cache = {})} />, root);
}
