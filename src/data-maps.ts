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
  'D.C.': 'District of Columbia',
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

export const usStateCodeByName = Object.freeze(
  (function() {
    const stateCodes = Object.keys(usStates);
    return stateCodes.reduce((nameToCode, code) => {
      nameToCode[usStates[code]] = code;
      return nameToCode;
    }, {});
  })()
);

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
  'Bahamas, The': 395361, // march 22 2020
  'Cabo Verde': 546388, // march 22 2020
  'Congo (Brazzaville)': 1800000,
  'Congo (Kinshasa)': 81340000, // march 22 2020
  'Cruise Ship': 700,
  Fiji: 905502, // march 22 2020
  'Gambia, The': 2101000, // march 22 2020
  Guernsey: 67052,
  Jersey: 97857,
  Kosovo: 1831000,
  Montenegro: 613219,
  Serbia: 7022000,
  'Taiwan*': 23780000,
});

export const manuallySourceStatePop = Object.freeze({
  // manually source via internet march 22 2020 (https://en.wikipedia.org/wiki/States_and_territories_of_Australia)
  Australia: Object.freeze({
    'Australian Capital Territory': 426709,
    'New South Wales': 8089526,
    'Northern Territory': 245869,
    Queensland: 5095100,
    'South Australia': 1751693,
    Tasmania: 534281,
    Victoria: 6594804,
    'Western Australia': 2621680,
  }),
  // manually source via internet march 22 2020 (https://worldpopulationreview.com/canadian-provinces/)
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
  // manually source via internet march 22 2020 ((2010) https://en.wikipedia.org/wiki/List_of_Chinese_administrative_divisions_by_population)
  China: Object.freeze({
    Anhui: 59500510,
    Beijing: 19612368,
    Chongqing: 28846170,
    Fujian: 36894216,
    Gansu: 25575254,
    Guangdong: 104303132,
    Guangxi: 46026629,
    Guizhou: 35806468,
    Hainan: 9261518,
    Hebei: 71854202,
    Heilongjiang: 38312224,
    Henan: 94023567,
    'Hong Kong': 7061200,
    Hubei: 57237740,
    Hunan: 65683722,
    'Inner Mongolia': 24706321,
    Jiangsu: 78659903,
    Jiangxi: 44567475,
    Jilin: 27462297,
    Liaoning: 43746323,
    Macau: 552503,
    Ningxia: 6176900,
    Qinghai: 5626722,
    Shaanxi: 37327378,
    Shandong: 100063065,
    Shanghai: 23019148,
    Shanxi: 37022111,
    Sichuan: 80418200,
    Tianjin: 12938224,
    Tibet: 3002166,
    Xinjiang: 21813334,
    Yunnan: 45966239,
    Zhejiang: 54426891,
  }),
  // manually source via internet march 22 2020
  Denmark: Object.freeze({
    Denmark: 5603000,
    'Faroe Islands': 49290,
    Greenland: 56171,
  }),
  // manually source via internet march 22 2020
  France: Object.freeze({
    France: 66990000,
    'French Guiana': 290691,
    'French Polynesia': 283007,
    Guadeloupe: 395700,
    Mayotte: 270372,
    'New Caledonia': 280460,
    Reunion: 859959,
    'Saint Barthelemy': 9131,
    'St Martin': 32125,
  }),
  // manually source via internet march 22 2020
  Netherlands: Object.freeze({
    Aruba: 105264,
    Curacao: 161014,
    Netherlands: 17180000,
    'Sint Maarten': 41109,
  }),
  // manually source via internet march 22 2020
  'United Kingdom': Object.freeze({
    'United Kingdom': 66440000,
    Bermuda: 65441,
    'Cayman Islands': 61559,
    'Channel Islands': 3703,
    Gibraltar: 34571,
    'Isle of Man': 84287,
    Montserrat: 5900,
  }),
  // manually source via internet march 22 2020 (https://github.com/jakevdp/data-USstates/blob/master/state-population.csv)
  US: Object.freeze({
    AL: 4833722,
    AK: 735132,
    AZ: 6626624,
    AR: 2959373,
    CA: 38332521,
    CO: 5268367,
    CT: 3596080,
    DE: 925749,
    DC: 646449,
    FL: 19552860,
    GA: 9992167,
    GU: 164229, // manually sourced
    HI: 1404054,
    ID: 1612136,
    IL: 12882135,
    IN: 6570902,
    IA: 3090416,
    KS: 2893957,
    KY: 4395295,
    LA: 4625470,
    ME: 1328302,
    MD: 5928814,
    MA: 6692824,
    MI: 9895622,
    MN: 5420380,
    MS: 2991207,
    MO: 6044171,
    MT: 1015165,
    NE: 1868516,
    NV: 2790136,
    NH: 1323459,
    NJ: 8899339,
    NM: 2085287,
    NY: 19651127,
    NC: 9848060,
    ND: 723393,
    OH: 11570808,
    OK: 3850568,
    OR: 3930065,
    PA: 12773801,
    RI: 1051511,
    SC: 4774839,
    SD: 844877,
    TN: 6495978,
    TX: 26448193,
    UT: 2900872,
    VT: 626630,
    VA: 8260405,
    VI: 107268, // manually sourced
    WA: 6971406,
    WV: 1854304,
    WI: 5742713,
    WY: 582658,
    PR: 3615086,
  }),
});
