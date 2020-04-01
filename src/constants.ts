export const twentyFourSeven = 24 * 60 * 60 * 1000;
export const recoveryDays = 25;
export const jhuStartDay = '2020-01-22';

export const reverseDeathProjectionDefaults = Object.freeze({
  daysFromInfectionToDeath: 17.3,
  doublingTime: 6.18,
  fatalityRate: 0.0087,
  minDeaths: 10,
});

export const usaCode = 'US';

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
