export const usStates = Object.freeze({
  AL: 'Alabama',
  AK: 'Alaska',
  AS: 'American Samoa',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  'D.C.': 'District Of Columbia',
  FM: 'Federated States Of Micronesia',
  FL: 'Florida',
  GA: 'Georgia',
  GU: 'Guam',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MH: 'Marshall Islands',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  MP: 'Northern Mariana Islands',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PW: 'Palau',
  PA: 'Pennsylvania',
  PR: 'Puerto Rico',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VI: 'Virgin Islands',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
});

// Current active cases / per cap
// Peak active cases / per cap
// Deaths / per cap
// Fatality Rate
// GDP
// Population Density
// Time since first confirmed
// Time since first 100 confirmed

export const mapJhuCountryToPop = Object.freeze({
  'Congo (Kinshasa)': 'The Democratic Republic of Congo',
  "Cote d'Ivoire": 'Ivory Coast',
  Czechia: 'Czech Republic',
  Eswatini: 'Swaziland',
  'Holy See': 'Holy See (Vatican City State)',
  'Korea, South': 'South Korea',
  'Republic of the Congo': 'Congo',
  Russia: 'Russian Federation',
  'Sri Lanka': 'SriLanka',
  'The Bahamas': 'Bahamas',
  'The Gambia': 'Gambia',
  US: 'United States',
});

// manually source via internet march 17 2020
export const manuallySourcePop = Object.freeze({
  'Congo (Brazzaville)': 1800000,
  'Cruise Ship': 700,
  Guernsey: 67052,
  Jersey: 97857,
  Kosovo: 1831000,
  Montenegro: 613219,
  Serbia: 7022000,
  'Taiwan*': 23780000,
});

// manually source via internet march 22 2020
export const manuallySourceStatePop = Object.freeze({
  Canada: Object.freeze({
    Alberta: 4345737,
    'British Columbia': 5020302,
    Ontario: 14446515,
    Manitoba: 1360396,
    'New Brunswick': 772094,
    'Newfoundland and Labrador': 523790,
    'Northwest Territories': 44598,
    'Nova Scotia': 965382,
    'Prince Edward Island': 154748,
    Quebec: 8433301,
    Saskatchewan: 1168423,
    Yukon: 40369,
    Nunavut: 38787,
  }),
});
