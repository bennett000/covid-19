import { Component, h } from 'preact';
import { connect } from 'react-redux';
import { ChartMap } from '../../components/map';
import { flexCol, fullSize, flex, styles } from '../../style';
import { Select } from '../../components/input/select';
import { Strings } from '../../../i18n';
import { ButtonToggle } from '../../components/input/button-toggle';
import * as geographyState from './geography.state';
import { ITimeSeriesArray } from '../../../data/data.interfaces';
import { MenuContainer } from '../../containers/menu/menu-container';

type GeographySeries = {
  ranges: { color: string; value: number[] }[];
  series: {
    defaultPoint_events_click: Function | null;
    map: string;
    points: any[];
  }[];
};

class BaseGeography extends Component<{
  dataSetIndex: number;
  incrementedPlayRecord: () => any;
  isPlaying: boolean;
  resetPlayRecord: () => any;
  selectedMap: (map: string) => any;
  selectedWorldMap: () => any;
  series: GeographySeries;
  strings: Strings;
  title: string;
  timeSeries: ITimeSeriesArray;
  updatedDataSet: (value: number) => any;
}> {
  private timer: any = 0;

  constructor() {
    super();
  }

  countryFromClick(e: any): string {
    if (!e) {
      return null;
    }
    if (!e.currentTarget) {
      return null;
    }
    if (!e.currentTarget.currentOptions) {
      return null;
    }
    if (!e.currentTarget.currentOptions.map) {
      return null;
    }
    if (!e.currentTarget.currentOptions.map.properties) {
      return null;
    }

    if (!e.currentTarget.currentOptions.map.properties.mapcode) {
      return null;
    }

    return e.currentTarget.currentOptions.map.properties.mapcode;
  }

  continentFromClick(e: any): string {
    if (!e) {
      return null;
    }
    if (!e.currentTarget) {
      return null;
    }
    if (!e.currentTarget.currentOptions) {
      return null;
    }
    if (!e.currentTarget.currentOptions.map) {
      return null;
    }
    if (!e.currentTarget.currentOptions.map.properties) {
      return null;
    }

    if (!e.currentTarget.currentOptions.map.properties.continent) {
      return null;
    }

    return e.currentTarget.currentOptions.map.properties.continent;
  }

  private endTimer() {
    clearInterval(this.timer);
    this.timer = 0;
  }

  private endPlay() {
    this.endTimer();
    this.props.resetPlayRecord();
  }

  togglePlay() {
    if (this.props.isPlaying) {
      return this.endPlay();
    }
    if (this.timer) {
      this.endTimer();
    }

    this.props.incrementedPlayRecord();
    this.timer = setInterval(this.props.incrementedPlayRecord.bind(this), 500);
  }

  onMapClick(e: any) {
    const c = this.countryFromClick(e);
    if (geographyState.countriesWithStates.indexOf(c.toUpperCase()) > -1) {
      this.props.selectedMap(c);
      return;
    }
    this.tryContinent(e);
  }

  tryContinent(e: any) {
    const continent = this.continentFromClick(e);
    if (!continent) {
      return;
    }
    let finalContinent = continent;
    if (continent === 'North America' || continent === 'South America') {
      finalContinent = 'Americas';
    }
    this.props.selectedMap(finalContinent);
  }

  zoomOut() {
    this.props.selectedWorldMap();
  }

  render() {
    if (this.props.isPlaying === false && this.timer) {
      this.endTimer();
    }
    const { ranges, series } = this.props.series;
    series.forEach(
      s => (s.defaultPoint_events_click = this.onMapClick.bind(this))
    );
    return (
      <section
        onClick={this.zoomOut.bind(this)}
        className={`${fullSize} ${flexCol}`}
      >
        <ChartMap
          ranges={ranges}
          series={series}
          strings={this.props.strings}
          title={this.props.title}
        />
        <section className={flex}>
          <Select
            classes={styles.selectBox}
            onChange={this.props.updatedDataSet}
            options={[
              this.props.strings.series.activeCases,
              this.props.strings.series.confirmedCases,
              this.props.strings.series.deaths,
              this.props.strings.series.recoveries,
            ]}
            selected={this.props.dataSetIndex}
          ></Select>
          <ButtonToggle
            classes={styles.button}
            labelFalse={this.props.strings.geography.play}
            labelTrue={this.props.strings.geography.stop}
            onClick={this.togglePlay.bind(this)}
            state={this.props.isPlaying}
          ></ButtonToggle>
          <MenuContainer />
        </section>
      </section>
    );
  }
}

export const Geography = connect(
  state => ({
    dataSetIndex: geographyState.select.dataSetIndex(state),
    isPlaying: geographyState.select.isPlaying(state),
    series: geographyState.select.series(state),
    strings: state.strings,
    title: geographyState.select.title(state),
  }),
  {
    incrementedPlayRecord: geographyState.actions.incrementedRecord,
    resetPlayRecord: geographyState.actions.resetRecord,
    selectedMap: geographyState.actions.selectedMap,
    selectedWorldMap: geographyState.actions.selectedWorldMap,
    updatedDataSet: geographyState.actions.updatedDataSet,
  }
)(BaseGeography);
