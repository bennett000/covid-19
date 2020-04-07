import Router, { route } from 'preact-router';
import { Component, h, render as preactRender } from 'preact';
import { TimeVsCount } from './features/feature-time-vs-counts/time-vs-counts';
import { createState, loadState, saveState } from './state';
import {
  AppState,
  ChartSeries,
  SelectOptionsWithIndex,
  TimeVsCountsState,
  MenuProp,
  TableState,
  ConfirmedVsRecentState,
  InputSeirState,
} from '../interfaces';
import { selectData, fetchData } from '../data';
import { log } from '../utility';
import { Dictionary } from '@ch1/utility';
import { LearningTable } from './features/learning-table';
import { Header } from './components/header';
import { fullSize, flexCol } from './style';
import { ConfirmedVsRecent } from './features/confirmed-vs-recent';
import { Geography } from './features/geography';
import { About } from './features/about';
import { Strings } from '../i18n';
import './global.css';

class AppUi extends Component<
  { cache: Dictionary<ChartSeries>; reset: () => any; strings: Strings },
  AppState
> {
  menu: MenuProp;

  constructor(props) {
    super();

    let state = loadState(props.strings);
    if (!state) {
      log(props.strings.app.log.noState);
      state = createState(props.strings);
    }
    this.state = state;
    this.selectAndUpdate();

    this.menu = {
      labels: props.strings.app.menu.map(s => s.name),
      onClick: (selected: number) => {
        const routePath =
          this.props.strings.app.menu[selected].route ||
          this.props.strings.app.menu[0].route;
        this.setState({
          ...this.state,
          currentSeries: [],
          routePath,
        });
        this.menu.selected = selected;
        route(routePath);
        this.selectAndUpdate();
      },
      selected: props.strings.app.menu.reduce((s, n, i) => {
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

  timeVsCounts(tvc: TimeVsCountsState) {
    this.setState({
      ...this.state,
      timeVsCountsState: tvc,
    });
    this.selectAndUpdate();
  }

  confirmedVsRecent(cvr: ConfirmedVsRecentState) {
    this.setState({
      ...this.state,
      confirmedVsRecentState: cvr,
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
      dataPromise: fetchData(this.props.strings).then(d => {
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

  onSeirStateChange(seirState: InputSeirState) {
    this.setState({
      ...this.state,
      seirState,
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

  selectCountries(countryKeys: string[]) {
    this.setState({
      ...this.state,
      countryKeys,
    });
    this.selectAndUpdate();
  }

  render() {
    return (
      <div className={`${fullSize} ${flexCol}`}>
        <Header strings={this.props.strings} />
        <Router>
          <TimeVsCount
            path={this.props.strings.app.menu[0].route}
            clearCountries={this.clearCountries.bind(this)}
            countries={this.state.countries}
            countryKeys={this.state.countryKeys}
            currentSeries={this.state.currentSeries}
            menu={this.menu}
            onChange={this.timeVsCounts.bind(this)}
            onSeirStateChange={this.onSeirStateChange.bind(this)}
            key="0"
            reload={this.reload.bind(this)}
            seirState={this.state.seirState}
            selectCountry={this.selectCountry.bind(this)}
            selectCountries={this.selectCountries.bind(this)}
            state={this.state.timeVsCountsState}
            strings={this.props.strings}
          ></TimeVsCount>
          <ConfirmedVsRecent
            path={this.props.strings.app.menu[1].route}
            clearCountries={this.clearCountries.bind(this)}
            countries={this.state.countries}
            countryKeys={this.state.countryKeys}
            currentSeries={this.state.currentSeries}
            key="1"
            menu={this.menu}
            onChange={this.confirmedVsRecent.bind(this)}
            selectCountry={this.selectCountry.bind(this)}
            selectCountries={this.selectCountries.bind(this)}
            state={this.state.confirmedVsRecentState}
            strings={this.props.strings}
          ></ConfirmedVsRecent>
          <LearningTable
            path={this.props.strings.app.menu[2].route}
            countryKeys={this.state.countryKeys}
            key="2"
            onChange={this.tableState.bind(this)}
            menu={this.menu}
            state={this.state.tableState}
            selectCountry={this.selectCountry.bind(this)}
            strings={this.props.strings}
            timeSeries={this.state.data}
          ></LearningTable>
          <Geography
            path={this.props.strings.app.menu[3].route}
            key="3"
            menu={this.menu}
            strings={this.props.strings}
            timeSeries={this.state.data}
          ></Geography>
          <About
            path={this.props.strings.app.menu[4].route}
            key="4"
            strings={this.props.strings}
            menu={this.menu}
          ></About>
        </Router>
      </div>
    );
  }
}

export function render(root: HTMLElement, strings: Strings) {
  let cache: Dictionary<ChartSeries> = {};
  preactRender(
    <AppUi cache={cache} reset={() => (cache = {})} strings={strings} />,
    root
  );
}
