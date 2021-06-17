import {
  AdminsegCountry,
  AdminsegFrequency,
  AdminsegGender,
  AdminsegProduct
} from './interfaces';

const adminsegCountries: AdminsegCountry[] = [
  {
    value: 10,
    name: 'Antigua And Barbuda',
    code: 'ANT'
  },
  {
    value: 11,
    name: 'Argentina',
    code: 'ARG'
  },
  {
    value: 13,
    name: 'Aruba',
    code: 'ARU'
  },
  {
    value: 17,
    name: 'Bahamas',
    code: 'BAH'
  },
  {
    value: 20,
    name: 'Barbados',
    code: 'BAR'
  },
  {
    value: 23,
    name: 'Belize',
    code: 'BEL'
  },
  {
    value: 25,
    name: 'Bermuda',
    code: 'BMU'
  },
  {
    value: 27,
    name: 'Bolivia',
    code: 'BOL'
  },
  {
    value: 31,
    name: 'Brazil',
    code: 'BRA'
  },
  {
    value: 42,
    name: 'Cayman Islands',
    code: 'ISC'
  },
  {
    value: 45,
    name: 'Chile',
    code: 'CHI'
  },
  {
    value: 49,
    name: 'Colombia',
    code: 'COL'
  },
  {
    value: 54,
    name: 'Costa Rica',
    code: 'COS'
  },
  {
    value: 64,
    name: 'Dominica',
    code: 'DOM'
  },
  {
    value: 65,
    name: 'Dominican Republic',
    code: 'DRE'
  },
  {
    value: 67,
    name: 'Ecuador',
    code: 'ECU'
  },
  {
    value: 69,
    name: 'El Salvador',
    code: 'ELS'
  },
  {
    value: 80,
    name: 'French Guyana',
    code: 'GUF'
  },
  {
    value: 91,
    name: 'Grenada',
    code: 'GRE'
  },
  {
    value: 92,
    name: 'Guadeloupe',
    code: 'GUA'
  },
  {
    value: 94,
    name: 'Guatemala',
    code: 'GUT'
  },
  {
    value: 98,
    name: 'Guyana',
    code: 'GUY'
  },
  {
    value: 99,
    name: 'Haiti',
    code: 'HAI'
  },
  {
    value: 101,
    name: 'Honduras',
    code: 'HON'
  },
  {
    value: 113,
    name: 'Jamaica',
    code: 'JAM'
  },
  {
    value: 141,
    name: 'Martinique',
    code: 'MAR'
  },
  {
    value: 145,
    name: 'Mexico',
    code: 'MEX'
  },
  {
    value: 162,
    name: 'Nicaragua',
    code: 'NIC'
  },
  {
    value: 174,
    name: 'Panama',
    code: 'PAN'
  },
  {
    value: 176,
    name: 'Paraguay',
    code: 'PAR'
  },
  {
    value: 177,
    name: 'Peru',
    code: 'PER'
  },
  {
    value: 229,
    name: 'Republic of Trinidad and Tobago',
    code: 'RTT'
  },
  {
    value: 188,
    name: 'Saint Bartholomew',
    code: 'SBA'
  },
  {
    value: 190,
    name: 'Saint Cristobal and Nevis',
    code: 'SCN'
  },
  {
    value: 191,
    name: 'Saint Lucia',
    code: 'SLU'
  },
  {
    value: 194,
    name: 'Saint Vincent And The Grenadines',
    code: 'SVG'
  },
  {
    value: 216,
    name: 'Suriname',
    code: 'SUR'
  },
  {
    value: 254,
    name: 'Turks and Caicos Islands',
    code: 'ITC'
  },
  {
    value: 240,
    name: 'Uruguay',
    code: 'URU'
  },
  {
    value: 245,
    name: 'Venezuela',
    code: 'VEN'
  },
  {
    value: 247,
    name: 'Virgin Islands (British)',
    code: 'ISV'
  }
];

const adminsegGenders: AdminsegGender[] = [
  {
    value: 4,
    name: 'Male',
    vtioID: 1
  },
  {
    value: 5,
    name: 'Female',
    vtioID: 2
  }
];

const adminsegProducts: AdminsegProduct[] = [
  {
    value: 3,
    name: 'Easy Term',
    vtioID: 'p1',
    plans: [
      {
        value: 9,
        name: 'Easy Term 10',
        coverage_years: 10
      },
      {
        value: 10,
        name: 'Easy Term 15',
        coverage_years: 15
      },
      {
        value: 11,
        name: 'Easy Term 20',
        coverage_years: 20
      },
      {
        value: 12,
        name: 'Easy Term 30',
        coverage_years: 30
      }
    ]
  }
];

const adminsegFrequencies: AdminsegFrequency[] = [
  {
    value: 10,
    name: 'Annual',
    payouts: 1,
    vtioID: 'ANNUAL'
  },
  {
    value: 15,
    name: 'Monthly',
    payouts: 12,
    vtioID: 'MONTHLY'
  },
  {
    value: 13,
    name: 'Quarterly',
    payouts: 4,
    vtioID: 'QUARTERLY'
  },
  {
    value: 11,
    name: 'Semiannual',
    payouts: 2,
    vtioID: 'SEMMIANNUALLY'
  }
];

export {
  adminsegCountries,
  adminsegGenders,
  adminsegProducts,
  adminsegFrequencies
};
