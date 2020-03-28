export const border = 'border';
export const fullSize = 'full-size';
export const flex = 'flex';
export const flexCol = 'flex flex-col';
export const flexItem5 = 'flex-item-5';
export const flexItem20 = 'flex-item-20';
export const flexItem60 = 'flex-item-60';
export const flexItem95 = 'flex-item-95';
export const highlight = 'highlight';
export const padding = 'padding';
export const rowEven = 'row-even';
export const rowOdd = 'row-odd';
export const rowHighlight = 'row-highlight';

export const recoveryDays = 25;

export const strings = Object.freeze({
  countries: Object.freeze({
    total: 'Total',
    world: 'World',
  }),
  descriptions: Object.freeze({
    metrics: Object.freeze({
      byPercet:
        'Uses the percentage of population* note population data is imperfect',
      byValue: 'Uses the raw count',
    }),
    modes: Object.freeze({
      byDate: 'Plots series based on the date the count occured',
      byFirst:
        'Plots series starting from the day the first person was confirmed to have covid-19',
      byFirst100:
        'Plots series starting from the day the first one hundred (100) people were confirmed to have covid-19',
    }),
    scales: Object.freeze({
      linear: 'scales "normally" 0, 10, 20, 30, 40, 50...',
      logarithmic:
        'scales by a multiplier 0, 10, 100, 1000, 10000... this scale is useful for looking at series that are early in their curve and series that are late in their curve at the same time',
    }),
    series: Object.freeze({
      activeCases:
        'Confirmed - Deaths - Recoveries*.  There is an * because this ' +
        'value depends on Recoveries*',
      confirmedCases:
        'The number of confirmed cases according to reported data',
      deaths:
        'The number of reported deaths, this is the most reliable data point',
      recoveries:
        'Roughly how many people have recovered.  There is some actual data ' +
        `but it is not maintained. Recoveries are estimated based on ${recoveryDays} since ` +
        'the case was reported confirmed',
      estimatedActiveCases: Object.freeze({
        part1: 'This estimate is',
        link:
          'based on the spreadsheet created for "Coronavirus act today...".',
        part2: '',
        url:
          'https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca',
      }),
    }),
    titles: Object.freeze({
      metrics: 'Metrics',
      modes: 'Modes',
      scales: 'Scales',
      series: 'Series',
    }),
  }),
  errors: Object.freeze({
    chart: Object.freeze({
      domError: 'could not add the chart to the DOM',
    }),
  }),
  header: Object.freeze({
    explorer: 'Explorer',
    feedbackLink: 'feedback',
    feedbackTitle: 'Provide feedback, suggest features, file issues, etc',
    jhuGitHubTitle:
      'GitHub repository of source data maintained by Johns Hopkins University',
    jhuSourceDataLink: 'Johns Hopkins University Source Data',
    sourceCodeLink: 'source code',
    sourceCodeTitle: 'Source code to this website',
    title: 'COVID-19',
  }),
  lineGraph: Object.freeze({
    reload: 'Reload',
  }),
  metrics: Object.freeze({
    byValue: 'By Value',
    byPercent: 'Percent',
  }),
  modes: Object.freeze({
    byDate: 'By date',
    byFirst: 'By first confirmed',
    byFirst100: 'By first 100 confirmed',
  }),
  scaleTypes: Object.freeze({
    linear: 'Linear',
    logarithmic: 'Logarithmic',
  }),
  series: Object.freeze({
    activeCases: 'Active Cases*',
    confirmedCases: 'Confirmed Cases',
    deaths: 'Deaths',
    estimatedActiveCases: 'Estimated Active Cases',
    recoveries: 'Recoveries*',
  }),
});

export const reverseDeathProjectionDefaults = Object.freeze({
  daysFromInfectionToDeath: 17.3,
  doublingTime: 6.18,
  fatalityRate: 0.0087,
  minDeaths: 10,
});

export const basePalette = [
  '#e01010',
  '#067ff1',
  '#5adc13',
  '#14f8e5',
  '#e30ed6',
  '#ff6600',
  '#ece019',
  '#590596',
];

export const projectionPalette = [
  '#f09090',
  '#add0f1',
  '#b5dc9f',
  '#b7f8f3',
  '#e3c1e1',
  '#ffc6a0',
  '#ece79c',
  '#9e8dce',
];

export const activeRanges = [
  { value: [0, 1], color: '#FFFFFF' },
  { value: [0, 100], color: '#fff5f5' },
  { value: [100, 1000], color: '#ffdcdc' },
  { value: [1000, 5000], color: '#ffa0a0' },
  { value: [5000, 15000], color: '#ff7373' },
  { value: [15000, 50000], color: '#ff4b4b' },
  { value: [50000, 150000], color: '#ff1919' },
  { value: [150000, 5000000000], color: '#c60000' },
];

export const confirmedRanges = [
  { value: [0, 1], color: '#FFFFFF' },
  { value: [0, 500], color: '#fff5f5' },
  { value: [500, 5000], color: '#ffdcdc' },
  { value: [5000, 15000], color: '#ffa0a0' },
  { value: [15000, 50000], color: '#ff7373' },
  { value: [50000, 150000], color: '#ff4b4b' },
  { value: [150000, 500000], color: '#ff1919' },
  { value: [500000, 5000000000], color: '#c60000' },
];

export const deathRanges = [
  { value: [0, 1], color: '#FFFFFF' },
  { value: [0, 50], color: '#fff5f5' },
  { value: [50, 150], color: '#ffdcdc' },
  { value: [150, 500], color: '#ffa0a0' },
  { value: [500, 1500], color: '#ff7373' },
  { value: [1500, 10000], color: '#ff4b4b' },
  { value: [10000, 50000], color: '#ff1919' },
  { value: [50000, 5000000000], color: '#c60000' },
];

export const recoveryRanges = [
  { value: [0, 1], color: '#FFFFFF' },
  { value: [1, 500], color: '#f0fff0' },
  { value: [500, 5000], color: '#dcffdc' },
  { value: [5000, 50000], color: '#beffbe' },
  { value: [50000, 250000], color: '#a0ffa0' },
  { value: [250000, 1000000], color: '#78ff78' },
  { value: [1000000, 5000000], color: '#41ff41' },
  { value: [5000000, 5000000000], color: '#009900' },
];
