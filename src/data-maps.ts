// Current active cases / per cap
// Peak active cases / per cap
// Deaths / per cap
// Fatality Rate
// GDP
// Population Density
// Time since first confirmed
// Time since first 100 confirmed

import { usaCode } from './constants';

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
  Burma: 53370000, // march 29 2020
  'Cabo Verde': 546388, // march 22 2020
  'Congo (Brazzaville)': 1800000,
  'Congo (Kinshasa)': 81340000, // march 22 2020
  'Cruise Ship': 3711,
  'Diamond Princess': 3711,
  Fiji: 905502, // march 22 2020
  'Gambia, The': 2101000, // march 22 2020
  Guernsey: 67052,
  Jersey: 97857,
  Kosovo: 1831000,
  Libya: 6375000,
  Montenegro: 613219,
  Serbia: 7022000,
  'Taiwan*': 23780000,
  'Timor-Leste': 1296000,
  'West Bank and Gaza': 4685000,
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

export const countriesToCodes = Object.freeze({
  Afghanistan: 'AF',
  'Åland Islands': 'AX',
  Albania: 'AL',
  Algeria: 'DZ',
  'American Samoa': 'AS',
  Andorra: 'AD',
  Angola: 'AO',
  Anguilla: 'AI',
  Antarctica: 'AQ',
  'Antigua and Barbuda': 'AG',
  Argentina: 'AR',
  Armenia: 'AM',
  Aruba: 'AW',
  Australia: 'AU',
  Austria: 'AT',
  Azerbaijan: 'AZ',
  Bahamas: 'BS',
  'Bahamas, The': 'BS',
  Bangladesh: 'BD',
  Bahrain: 'BH',
  Barbados: 'BB',
  Belarus: 'BY',
  Belgium: 'BE',
  Belize: 'BZ',
  Benin: 'BJ',
  Bermuda: 'BM',
  Bhutan: 'BT',
  Bolivia: 'BO',
  'Bosnia and Herzegovina': 'BA',
  Botswana: 'BW',
  'Bouvet Island': 'BV',
  Brazil: 'BR',
  'British Indian Ocean Territory': 'IO',
  Brunei: 'BN',
  Bulgaria: 'BG',
  'Burkina Faso': 'BF',
  Burma: 'MM',
  Burundi: 'BI',
  'Cabo Verde': 'CV',
  Cambodia: 'KH',
  Cameroon: 'CM',
  Canada: 'CA',
  'Cayman Islands': 'KY',
  'Central African Republic': 'CF',
  Chad: 'TD',
  Chile: 'CL',
  China: 'CN',
  'Christmas Island': 'CX',
  'Cocos (Keeling) Islands': 'CC',
  Colombia: 'CO',
  Comoros: 'KM',
  Congo: 'CG',
  'Congo (Brazzaville)': 'CG',
  'Congo, The Democratic Republic of the': 'CD',
  'Congo (Kinshasa)': 'CD',
  'Cook Islands': 'CK',
  'Costa Rica': 'CR',
  "Cote d'Ivoire": 'CI',
  Croatia: 'HR',
  Cuba: 'CU',
  Cyprus: 'CY',
  Czechia: 'CZ',
  Denmark: 'DK',
  Djibouti: 'DJ',
  Dominica: 'DM',
  'Dominican Republic': 'DO',
  Ecuador: 'EC',
  Egypt: 'EG',
  'El Salvador': 'SV',
  'Equatorial Guinea': 'GQ',
  Eritrea: 'ER',
  Estonia: 'EE',
  Eswatini: 'SZ',
  Ethiopia: 'ET',
  'Falkland Islands (Malvinas)': 'FK',
  'Faroe Islands': 'FO',
  Fiji: 'FJ',
  Finland: 'FI',
  France: 'FR',
  'French Guiana': 'GF',
  'French Polynesia': 'PF',
  'French Southern Territories': 'TF',
  Gambia: 'GM',
  Gabon: 'GA',
  'The, Gambia': 'GM',
  Georgia: 'GE',
  Germany: 'DE',
  Ghana: 'GH',
  Gibraltar: 'GI',
  Greece: 'GR',
  Greenland: 'GL',
  Grenada: 'GD',
  Guam: 'GU',
  Guatemala: 'GT',
  Guernsey: 'GG',
  Guinea: 'GN',
  'Guinea-Bissau': 'GW',
  Guyana: 'GY',
  Haiti: 'HT',
  'Heard Island and Mcdonald Islands': 'HM',
  'Holy See': 'VA',
  Honduras: 'HN',
  'Hong Kong': 'HK',
  Hungary: 'HU',
  Iceland: 'IS',
  India: 'IN',
  Indonesia: 'ID',
  Iran: 'IR',
  Iraq: 'IQ',
  Ireland: 'IE',
  'Isle of Man': 'IM',
  Israel: 'IL',
  Italy: 'IT',
  Jamaica: 'JM',
  Japan: 'JP',
  Jersey: 'JE',
  Jordan: 'JO',
  Kazakhstan: 'KZ',
  Kenya: 'KE',
  Kosovo: 'XK',
  Kiribati: 'KI',
  "Korea, Democratic People'S Republic of": 'KP',
  'Korea, South': 'KR',
  Kuwait: 'KW',
  Kyrgyzstan: 'KG',
  "Lao People'S Democratic Republic": 'LA',
  Laos: 'LA',
  Latvia: 'LV',
  Lebanon: 'LB',
  Lesotho: 'LS',
  Liberia: 'LR',
  'Libyan Arab Jamahiriya': 'LY',
  Liechtenstein: 'LI',
  Libya: 'LY',
  Lithuania: 'LT',
  Luxembourg: 'LU',
  Macao: 'MO',
  'Macedonia, The Former Yugoslav Republic of': 'MK',
  Madagascar: 'MG',
  Malawi: 'MW',
  Malaysia: 'MY',
  Maldives: 'MV',
  Mali: 'ML',
  Malta: 'MT',
  'Marshall Islands': 'MH',
  Mauritania: 'MR',
  Mauritius: 'MU',
  Mexico: 'MX',
  'Micronesia, Federated States of': 'FM',
  Moldova: 'MD',
  Monaco: 'MC',
  Mongolia: 'MN',
  Montenegro: 'ME',
  Montserrat: 'MS',
  Morocco: 'MA',
  Mozambique: 'MZ',
  Myanmar: 'MM',
  Namibia: 'NA',
  Nauru: 'NR',
  Nepal: 'NP',
  Netherlands: 'NL',
  'Netherlands Antilles': 'AN',
  'New Caledonia': 'NC',
  'New Zealand': 'NZ',
  Nicaragua: 'NI',
  Niger: 'NE',
  Nigeria: 'NG',
  Niue: 'NU',
  'Norfolk Island': 'NF',
  'Northern Mariana Islands': 'MP',
  'North Macedonia': 'MK',
  Norway: 'NO',
  Oman: 'OM',
  Pakistan: 'PK',
  Palau: 'PW',
  'Palestinian Territory, Occupied': 'PS',
  Panama: 'PA',
  'Papua New Guinea': 'PG',
  Paraguay: 'PY',
  Peru: 'PE',
  Philippines: 'PH',
  Pitcairn: 'PN',
  Poland: 'PL',
  Portugal: 'PT',
  'Puerto Rico': 'PR',
  Qatar: 'QA',
  Romania: 'RO',
  Russia: 'RU',
  Rwanda: 'RW',
  'Saint Helena': 'SH',
  'Saint Kitts and Nevis': 'KN',
  'Saint Lucia': 'LC',
  'Saint Pierre and Miquelon': 'PM',
  Samoa: 'WS',
  'San Marino': 'SM',
  'Sao Tome and Principe': 'ST',
  'Saudi Arabia': 'SA',
  Senegal: 'SN',
  Serbia: 'RS',
  Seychelles: 'SC',
  'Sierra Leone': 'SL',
  Singapore: 'SG',
  Slovakia: 'SK',
  Slovenia: 'SI',
  'Solomon Islands': 'SB',
  Somalia: 'SO',
  'South Africa': 'ZA',
  'South Georgia and the South Sandwich Islands': 'GS',
  Spain: 'ES',
  'Sri Lanka': 'LK',
  'Saint Vincent and the Grenadines': 'VC',
  Sudan: 'SD',
  Suriname: 'SR',
  'Svalbard and Jan Mayen': 'SJ',
  Swaziland: 'SZ',
  Sweden: 'SE',
  Switzerland: 'CH',
  Syria: 'SY',
  'Taiwan*': 'TW',
  Tajikistan: 'TJ',
  Tanzania: 'TZ',
  Thailand: 'TH',
  'Timor-Leste': 'TL',
  Togo: 'TG',
  Tokelau: 'TK',
  Tonga: 'TO',
  'Trinidad and Tobago': 'TT',
  Tunisia: 'TN',
  Turkey: 'TR',
  Turkmenistan: 'TM',
  'Turks and Caicos Islands': 'TC',
  Tuvalu: 'TV',
  Uganda: 'UG',
  Ukraine: 'UA',
  'United Arab Emirates': 'AE',
  'United Kingdom': 'GB',
  US: usaCode,
  'United States Minor Outlying Islands': 'UM',
  Uruguay: 'UY',
  Uzbekistan: 'UZ',
  Vanuatu: 'VU',
  Venezuela: 'VE',
  Vietnam: 'VN',
  'Virgin Islands, British': 'VG',
  'Virgin Islands, U.S.': 'VI',
  'Wallis and Futuna': 'WF',
  'Western Sahara': 'EH',
  Yemen: 'YE',
  Zambia: 'ZM',
  Zimbabwe: 'ZW',
  'West Bank and Gaza': 'PO',
});

export const statesToCodes = Object.freeze({
  Australia: Object.freeze({
    'Australian Capital Territory': 'AC',
    'New South Wales': 'NS',
    'Northern Territory': 'NT',
    Queensland: 'QL',
    'South Australia': 'SA',
    Tasmania: 'TS',
    Victoria: 'VI',
    'Western Australia': 'WA',
  }),
  // manually source via internet march 22 2020 (https://worldpopulationreview.com/canadian-provinces/)
  Canada: Object.freeze({
    Alberta: 'AB',
    'British Columbia': 'BC',
    Ontario: 'ON',
    Manitoba: 'MB',
    'New Brunswick': 'NB',
    'Newfoundland and Labrador': 'NF',
    'Northwest Territories': 'NT',
    'Nova Scotia': 'NS',
    'Prince Edward Island': 'PE',
    Quebec: 'QC',
    Saskatchewan: 'SK',
    Yukon: 'YT',
    Nunavut: 'NU',
  }),
  // manually source via internet march 22 2020 ((2010) https://en.wikipedia.org/wiki/List_of_Chinese_administrative_divisions_by_population)
  China: Object.freeze({
    Anhui: 'AH',
    Beijing: 'BJ',
    Chongqing: 'CQ',
    Fujian: 'FJ',
    Gansu: 'GS',
    Guangdong: 'GD',
    Guangxi: 'GX',
    Guizhou: 'GZ',
    Hainan: 'HA',
    Hebei: 'HB',
    Heilongjiang: 'HL',
    Henan: 'HE',
    'Hong Kong': 'HK',
    Hubei: 'HU',
    Hunan: 'HN',
    'Inner Mongolia': 'NM',
    Jiangsu: 'JS',
    Jiangxi: 'JX',
    Jilin: 'JL',
    Liaoning: 'LN',
    Macau: 'MO',
    Ningxia: 'NX',
    Qinghai: 'QH',
    Shaanxi: 'SA',
    Shandong: 'SD',
    Shanghai: 'SH',
    Shanxi: 'SX',
    Sichuan: 'SC',
    Tianjin: 'TJ',
    Tibet: 'AR',
    Xinjiang: 'XJ',
    Yunnan: 'YN',
    Zhejiang: 'ZJ',
  }),
  US: Object.freeze({
    AL: 'Alabama',
    AK: 'Alaska',
    AS: 'American Samoa',
    AZ: 'Arizona',
    AR: 'Arkansas',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DC: 'District of Columbia',
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
  }),
});

export const countriesToContinents = Object.freeze({
  Afghanistan: 'Asia',
  Albania: 'Europe',
  Algeria: 'Africa',
  Andorra: 'Europe',
  Angola: 'Africa',
  Argentina: 'South America',
  Armenia: 'Asia',
  Australia: 'Oceania',
  Austria: 'Europe',
  Azerbaijan: 'Asia',
  'Bahamas, The': 'North America',
  Bangladesh: 'Asia',
  Belarus: 'Europe',
  Belgium: 'Europe',
  Benin: 'Africa',
  Bhutan: 'Asia',
  Bolivia: 'South America',
  'Bosnia and Herzegovina': 'Europe',
  Brazil: 'South America',
  Brunei: 'Asia',
  Bulgaria: 'Europe',
  'Burkina Faso': 'Africa',
  Cambodia: 'Asia',
  Cameroon: 'Africa',
  Canada: 'North America',
  'Central African Republic': 'Africa',
  Chad: 'Africa',
  Chile: 'South America',
  China: 'Asia',
  Colombia: 'South America',
  'Costa Rica': 'North America',
  "Cote d'Ivoire": 'Africa',
  Croatia: 'Europe',
  Cuba: 'North America',
  Cyprus: 'Asia',
  Czechia: 'Europe',
  Denmark: 'Europe',
  Djibouti: 'Africa',
  'Dominican Republic': 'North America',
  Ecuador: 'South America',
  Egypt: 'Africa',
  'El Salvador': 'North America',
  'Equatorial Guinea': 'Africa',
  Eritrea: 'Africa',
  Estonia: 'Europe',
  Ethiopia: 'Africa',
  Fiji: 'Oceania',
  Finland: 'Europe',
  France: 'Europe',
  Gabon: 'Africa',
  Georgia: 'Asia',
  Germany: 'Europe',
  Ghana: 'Africa',
  Greece: 'Europe',
  Guatemala: 'North America',
  Guinea: 'Africa',
  Guyana: 'South America',
  Haiti: 'North America',
  Honduras: 'North America',
  Hungary: 'Europe',
  Iceland: 'Europe',
  India: 'Asia',
  Indonesia: 'Asia',
  Iran: 'Asia',
  Iraq: 'Asia',
  Ireland: 'Europe',
  Israel: 'Asia',
  Italy: 'Europe',
  Jamaica: 'North America',
  Japan: 'Asia',
  Jordan: 'Asia',
  Kazakhstan: 'Asia',
  Kenya: 'Africa',
  'Korea, South': 'Asia',
  Kuwait: 'Asia',
  Kyrgyzstan: 'Asia',
  Latvia: 'Europe',
  Lebanon: 'Asia',
  Liberia: 'Africa',
  Liechtenstein: 'Europe',
  Lithuania: 'Europe',
  Luxembourg: 'Europe',
  Madagascar: 'Africa',
  Malaysia: 'Asia',
  Mauritania: 'Africa',
  Mexico: 'North America',
  Moldova: 'Europe',
  Monaco: 'Europe',
  Mongolia: 'Asia',
  Morocco: 'Africa',
  Mozambique: 'Africa',
  Namibia: 'Africa',
  Nepal: 'Asia',
  Netherlands: 'Europe',
  'New Zealand': 'Oceania',
  Nicaragua: 'North America',
  Niger: 'Africa',
  Nigeria: 'Africa',
  Norway: 'Europe',
  Oman: 'Asia',
  Pakistan: 'Asia',
  Panama: 'North America',
  'Papua New Guinea': 'Oceania',
  Paraguay: 'South America',
  Peru: 'South America',
  Philippines: 'Asia',
  Poland: 'Europe',
  Portugal: 'Europe',
  Qatar: 'Asia',
  Romania: 'Europe',
  Russia: 'Asia',
  Rwanda: 'Africa',
  'San Marino': 'Europe',
  'Saudi Arabia': 'Asia',
  Senegal: 'Africa',
  Slovakia: 'Europe',
  Slovenia: 'Europe',
  Somalia: 'Africa',
  'South Africa': 'Africa',
  Spain: 'Europe',
  'Sri Lanka': 'Asia',
  Sudan: 'Africa',
  Suriname: 'South America',
  Sweden: 'Europe',
  Switzerland: 'Europe',
  Syria: 'Asia',
  'Taiwan*': 'Asia',
  Tanzania: 'Africa',
  Thailand: 'Asia',
  Togo: 'Africa',
  'Trinidad and Tobago': 'North America',
  Tunisia: 'Africa',
  Turkey: 'Asia',
  US: 'North America',
  Uganda: 'Africa',
  Ukraine: 'Europe',
  'United Arab Emirates': 'Asia',
  'United Kingdom': 'Europe',
  Uruguay: 'South America',
  Uzbekistan: 'Asia',
  Venezuela: 'South America',
  Vietnam: 'Asia',
  Zambia: 'Africa',
  Zimbabwe: 'Africa',
});

export const usStateCodeByName = Object.freeze(
  (function() {
    const stateCodes = Object.keys(statesToCodes.US);
    return stateCodes.reduce((nameToCode, code) => {
      nameToCode[statesToCodes.US[code]] = code;
      return nameToCode;
    }, {});
  })()
);

export const excludeFromMap = {
  '': true,
  AG: true, // but it exists in the docs
  BB: true, // but it exists in the docs
  BH: true, // but it exists in the docs
  'CN.HK': 'HK',
  'CN.MO': 'MO',
  CV: true, // but it exists in the docs
  DM: true, // but it exists in the docs
  GD: true, // but it exists in the docs
  KN: true,
  LC: true, // but it exists in the docs
  MT: true, // but it exists in the docs
  MU: true,
  MV: true,
  PO: true,
  TL: 'TP',
  SC: true,
  SG: true, // but it exists in the docs
  'US.GU': true,
  'US.PR': true,
  'US.VI': true,
  VC: true,
};
