import Router from 'preact-router';
import { Component, h, render as preactRender } from 'preact';
import { Provider } from 'react-redux';
import { TimeVsCount } from './features/time-vs-counts/time-vs-counts';
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
import { noop } from '@ch1/utility';

class AppUi extends Component<{
  strings: Strings;
}> {
  render() {
    return (
      <div className={`${fullSize} ${flexCol}`}>
        <Header strings={this.props.strings} />
        <Router>
          <TimeVsCount
            path={this.props.strings.app.menu[0].route}
            key="0"
            reload={noop}
          ></TimeVsCount>
          <ConfirmedVsRecent
            path={this.props.strings.app.menu[1].route}
            key="1"
          ></ConfirmedVsRecent>
          <DataTable
            path={this.props.strings.app.menu[2].route}
            key="2"
          ></DataTable>
          <Geography
            path={this.props.strings.app.menu[3].route}
            key="3"
          ></Geography>
          <About
            path={this.props.strings.app.menu[4].route}
            key="4"
            strings={this.props.strings}
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
      <AppUi strings={strings} />
    </Provider>,
    root
  );
}
