import Router, { route } from 'preact-router';
import { Component, h, render as preactRender } from 'preact';
import { Provider } from 'react-redux';
import { TimeVsCount } from './features/time-vs-counts/time-vs-counts';
import { createState, loadState, saveState } from './state';
import {
  AppState,
  TimeVsCountsState,
  MenuProp,
  TableState,
  ConfirmedVsRecentState,
} from '../interfaces';
import { fetchData } from '../data';
import { log } from '../utility';
import { DataTable } from './features/data-table/data-table';
import { Header } from './components/header';
import { fullSize, flexCol } from './style';
import { ConfirmedVsRecent } from './features/confirmed-vs-recent/confirmed-vs-recent';
import { Geography } from './features/geography/geography';
import { About } from './features/about';
import { Strings } from '../i18n';
import './global.css';
import { createStore } from './store/store';
import { ITimeSeriesCollection } from '../data/data.interfaces';

class AppUi extends Component<
  { reset: () => any; strings: Strings },
  AppState
> {
  menu: MenuProp;
  store: any;

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

  selectAndUpdate() {
    this.state.dataPromise
      .then(({ timeSeries }) => {
        this.setState({
          ...this.state,
          data: timeSeries,
        });
      })
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
            menu={this.menu}
            key="0"
            reload={this.reload.bind(this)}
          ></TimeVsCount>
          <ConfirmedVsRecent
            path={this.props.strings.app.menu[1].route}
            key="1"
            menu={this.menu}
          ></ConfirmedVsRecent>
          <DataTable
            path={this.props.strings.app.menu[2].route}
            key="2"
            menu={this.menu}
          ></DataTable>
          <Geography
            path={this.props.strings.app.menu[3].route}
            key="3"
            menu={this.menu}
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

export function render(
  root: HTMLElement,
  timeSeriesCollection: ITimeSeriesCollection,
  strings: Strings
) {
  const store = createStore({ strings, timeSeriesCollection });
  preactRender(
    <Provider store={store}>
      <AppUi reset={() => undefined} strings={strings} />
    </Provider>,
    root
  );
}
