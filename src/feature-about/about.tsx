import { Component, h } from 'preact';
import { MenuProp } from '../interfaces';
import { fullSize, strings, recoveryDays } from '../constants';
import { Menu } from '../components/menu';
import { AboutList } from '../components/about-list';

const definitionsSeries = [
  {
    name: strings.series.activeCases,
    description: strings.descriptions.series.activeCases,
  },
  {
    name: strings.series.confirmedCases,
    description: strings.descriptions.series.confirmedCases,
  },
  {
    name: strings.series.deaths,
    description: strings.descriptions.series.deaths,
  },
  {
    name: strings.series.recoveries,
    description: strings.descriptions.series.recoveries,
  },
  {
    name: strings.series.estimatedActiveCases,
    description: () => (
      <span>
        {strings.descriptions.series.estimatedActiveCases.part1}
        <a
          href={strings.descriptions.series.estimatedActiveCases.url}
          target="_blank"
        >
          {strings.descriptions.series.estimatedActiveCases.link}
        </a>{' '}
        {strings.descriptions.series.estimatedActiveCases.part2}
      </span>
    ),
  },
];

const definitionsMetrics = [
  {
    name: strings.metrics.byValue,
    description: strings.descriptions.metrics.byValue,
  },
  {
    name: strings.metrics.byPercent,
    description: strings.descriptions.metrics.byPercet,
  },
];

const definitionsModes = [
  {
    name: strings.modes.byDate,
    description: strings.descriptions.modes.byDate,
  },
  {
    name: strings.modes.byFirst,
    description: strings.descriptions.modes.byFirst,
  },
  {
    name: strings.modes.byFirst100,
    description: strings.descriptions.modes.byFirst100,
  },
];

const definitionsScales = [
  {
    name: strings.scaleTypes.linear,
    description: strings.descriptions.scales.linear,
  },
  {
    name: strings.scaleTypes.logarithmic,
    description: strings.descriptions.scales.logarithmic,
  },
];

export class About extends Component<{
  menu: MenuProp;
}> {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className={`${fullSize}`}>
        <AboutList title="Series Types" list={definitionsSeries}></AboutList>
        <AboutList title="Modes" list={definitionsModes}></AboutList>
        <AboutList title="Scales" list={definitionsScales}></AboutList>
        <AboutList title="Metrics" list={definitionsMetrics}></AboutList>
        <Menu config={this.props.menu}></Menu>
      </section>
    );
  }
}
