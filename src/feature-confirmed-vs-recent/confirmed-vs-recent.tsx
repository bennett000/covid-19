import { Component, h } from 'preact';
import { MenuProp } from '../interfaces';
import { flexCol, fullSize, flex } from '../constants';
import { Menu } from '../components/menu';
import { Strings } from '../i18n';

export class ConfirmedVsRecent extends Component<{
  menu: MenuProp;
  strings: Strings;
}> {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // force chart to redraw
    this.setState({
      ...this.state,
    });
  }

  render() {
    return (
      <section className={`${fullSize} ${flexCol}`}>
        {/* <Chart
          flexSize={this.props.state.isConfigOpen ? flexItem60 : flexItem95}
          series={this.props.currentSeries}
          scaleType={this.props.state.scaleType}
          strings={this.props.strings}
          useDays={this.useDays()}
        ></Chart> */}
        <section className={flex}>
          {/* <ButtonToggle
            classes={classes}
            labelTrue={this.props.strings.lineGraph.enlarge}
            labelFalse={this.props.strings.lineGraph.configure}
            onClick={this.toggleConfig.bind(this)}
            state={this.props.state.isConfigOpen}
          /> */}
          <Menu config={this.props.menu}></Menu>
        </section>
        {/* {this.props.state.isConfigOpen ? (
          <TimeVsCountsControls
            onUpdateCountryFilter={this.setCountryFilter.bind(this)}
            clearCountries={this.props.clearCountries}
            countryKeys={this.props.countryKeys}
            countries={this.props.countries}
            currentSeries={this.props.currentSeries}
            onChange={this.props.onChange}
            reload={this.props.reload}
            selectCountry={this.props.selectCountry}
            selectCountries={this.props.selectCountries}
            state={this.props.state}
            strings={this.props.strings}
          />
        ) : (
          ''
        )} */}
      </section>
    );
  }
}
