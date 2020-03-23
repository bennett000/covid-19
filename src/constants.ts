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

export const totalString = 'Total';
export const usaString = 'US';
export const worldString = 'World';

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
  { value: [100, 500], color: '#ffdcdc' },
  { value: [500, 1500], color: '#ffa0a0' },
  { value: [1500, 5000], color: '#ff7373' },
  { value: [5000, 15000], color: '#ff4b4b' },
  { value: [15000, 30000], color: '#ff1919' },
  { value: [30000, 5000000000], color: '#c60000' },
];

export const confirmedRanges = [
  { value: [0, 1], color: '#FFFFFF' },
  { value: [0, 100], color: '#fff5f5' },
  { value: [100, 500], color: '#ffdcdc' },
  { value: [500, 2000], color: '#ffa0a0' },
  { value: [2000, 10000], color: '#ff7373' },
  { value: [10000, 25000], color: '#ff4b4b' },
  { value: [25000, 60000], color: '#ff1919' },
  { value: [60000, 5000000000], color: '#c60000' },
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
  { value: [1, 100], color: '#f0fff0' },
  { value: [100, 1000], color: '#dcffdc' },
  { value: [1000, 10000], color: '#beffbe' },
  { value: [10000, 25000], color: '#a0ffa0' },
  { value: [25000, 100000], color: '#78ff78' },
  { value: [100000, 500000], color: '#41ff41' },
  { value: [500000, 5000000000], color: '#009900' },
];
