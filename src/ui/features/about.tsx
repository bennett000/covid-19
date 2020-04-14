import { Component, h } from 'preact';
import { fullSize } from '../style';
import { AboutList } from '../components/about-list';
import { Strings } from '../../i18n';
import { MenuContainer } from '../containers/menu/menu-container';

export class About extends Component<{
  strings: Strings;
}> {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const definitionsSeries = [
      {
        name: this.props.strings.series.activeCases,
        description: this.props.strings.descriptions.series.activeCases,
      },
      {
        name: this.props.strings.series.confirmedCases,
        description: this.props.strings.descriptions.series.confirmedCases,
      },
      {
        name: this.props.strings.series.deaths,
        description: this.props.strings.descriptions.series.deaths,
      },
      {
        name: this.props.strings.series.recoveries,
        description: this.props.strings.descriptions.series.recoveries,
      },
      {
        name: this.props.strings.series.estimatedActiveCases,
        description: () => (
          <span>
            {this.props.strings.descriptions.series.estimatedActiveCases.part1}
            &nbsp;
            <a
              href={
                this.props.strings.descriptions.series.estimatedActiveCases.url
              }
              target="_blank"
            >
              {this.props.strings.descriptions.series.estimatedActiveCases.link}
            </a>{' '}
            {this.props.strings.descriptions.series.estimatedActiveCases.part2}
          </span>
        ),
      },
      {
        name: this.props.strings.descriptions.series.projectionSeir.title,
        description: () => (
          <span>
            {this.props.strings.descriptions.series.projectionSeir.part1}&nbsp;
            <a
              href={this.props.strings.descriptions.series.projectionSeir.url}
              target="_blank"
            >
              {this.props.strings.descriptions.series.projectionSeir.link}
            </a>{' '}
            {this.props.strings.descriptions.series.projectionSeir.part2}
          </span>
        ),
      },
    ];

    const definitionsMetrics = [
      {
        name: this.props.strings.metrics.byValue,
        description: this.props.strings.descriptions.metrics.byValue,
      },
      {
        name: this.props.strings.metrics.byPercent,
        description: this.props.strings.descriptions.metrics.byPercet,
      },
    ];

    const definitionsModes = [
      {
        name: this.props.strings.modes.byDate,
        description: this.props.strings.descriptions.modes.byDate,
      },
      {
        name: this.props.strings.modes.byFirst,
        description: this.props.strings.descriptions.modes.byFirst,
      },
      {
        name: this.props.strings.modes.byFirst100,
        description: this.props.strings.descriptions.modes.byFirst100,
      },
    ];

    const definitionsScales = [
      {
        name: this.props.strings.scaleTypes.linear,
        description: this.props.strings.descriptions.scales.linear,
      },
      {
        name: this.props.strings.scaleTypes.logarithmic,
        description: this.props.strings.descriptions.scales.logarithmic,
      },
    ];

    return (
      <section className={`${fullSize}`}>
        <AboutList
          title={this.props.strings.descriptions.titles.series}
          list={definitionsSeries}
        ></AboutList>
        <AboutList
          title={this.props.strings.descriptions.titles.modes}
          list={definitionsModes}
        ></AboutList>
        <AboutList
          title={this.props.strings.descriptions.titles.scales}
          list={definitionsScales}
        ></AboutList>
        <AboutList
          title={this.props.strings.descriptions.titles.metrics}
          list={definitionsMetrics}
        ></AboutList>
        <MenuContainer />
      </section>
    );
  }
}
