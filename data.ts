import {
  AdminsegCountry,
  AdminsegFrequency,
  AdminsegGender,
  AdminsegHeightUnit,
  AdminsegIdentityType,
  AdminsegPersonType,
  AdminsegPhoneType,
  AdminsegProduct,
  AdminsegRelationship,
  AdminsegWeightUnit
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

const adminsegRelationships: AdminsegRelationship[] = [
  {
    value: 39,
    name: 'Aunt',
    vtioID: 1
  },
  {
    value: 32,
    name: 'Boyfriend',
    vtioID: 2
  },
  {
    value: 25,
    name: 'Brother',
    vtioID: 3
  },
  {
    value: 22,
    name: 'Brother in law',
    vtioID: 4
  },
  {
    value: 40,
    name: 'Business Partner',
    vtioID: 5
  },
  {
    value: 42,
    name: 'Collateral Assignment',
    vtioID: 6
  },
  {
    value: 28,
    name: 'Daughter',
    vtioID: 7
  },
  {
    value: 41,
    name: 'Employer',
    vtioID: 8
  },
  {
    value: 24,
    name: 'Ex-Spouse',
    vtioID: 9
  },
  {
    value: 35,
    name: 'Father',
    vtioID: 10
  },
  {
    value: 36,
    name: 'Father in law',
    vtioID: 11
  },
  {
    value: 20,
    name: 'Friendship',
    vtioID: 12
  },
  {
    value: 33,
    name: 'Girlfriend',
    vtioID: 13
  },
  {
    value: 31,
    name: 'Granddaughter',
    vtioID: 14
  },
  {
    value: 18,
    name: 'Grandfather',
    vtioID: 15
  },
  {
    value: 19,
    name: 'Grandmother',
    vtioID: 16
  },
  {
    value: 30,
    name: 'Grandson',
    vtioID: 17
  },
  {
    value: 29,
    name: 'Mother',
    vtioID: 18
  },
  {
    value: 37,
    name: 'Mother in law',
    vtioID: 19
  },
  {
    value: 34,
    name: 'Other',
    vtioID: 20
  },
  {
    value: 26,
    name: 'Sister',
    vtioID: 21
  },
  {
    value: 23,
    name: 'Sister in law',
    vtioID: 22
  },
  {
    value: 27,
    name: 'Son',
    vtioID: 23
  },
  {
    value: 21,
    name: 'Spouse',
    vtioID: 24
  },
  {
    value: 38,
    name: 'Uncle',
    vtioID: 25
  }
];

const adminsegPhoneTypes: AdminsegPhoneType[] = [
  {
    value: 3,
    name: 'Fax',
    vtioID: 3
  },
  {
    value: 2,
    name: 'Home',
    vtioID: 2
  },
  {
    value: 1,
    name: 'Mobile',
    vtioID: 1
  }
];

const adminsegIdentityTypes: AdminsegIdentityType[] = [
  {
    value: 1,
    name: 'ID',
    vtioID: 1
  },
  {
    value: 2,
    name: 'Passport',
    vtioID: 2
  },
  {
    value: 3,
    name: "Owner's ID",
    vtioID: 3
  },
  {
    value: 4,
    name: 'Legal Representative',
    vtioID: 4
  }
];

const adminsegPersonTypes: AdminsegPersonType[] = [
  {
    value: 'lp',
    name: 'legal_person',
    vtioID: 2
  },
  {
    value: 'rp',
    name: 'real_person',
    vtioID: 1
  }
];

const adminsegHeightUnits: AdminsegHeightUnit[] = [
  {
    value: 'M',
    name: 'Meters',
    vtioID: 1
  },
  {
    value: 'FT',
    name: 'Feet and Inch',
    vtioID: 2
  }
];

const adminsegWeightUnits: AdminsegWeightUnit[] = [
  {
    value: 'KG',
    name: 'Kilograms',
    vtioID: 1
  },
  {
    value: 'LBS',
    name: 'Pounds',
    vtioID: 2
  }
];

export {
  adminsegCountries,
  adminsegGenders,
  adminsegProducts,
  adminsegFrequencies,
  adminsegRelationships,
  adminsegPhoneTypes,
  adminsegIdentityTypes,
  adminsegPersonTypes,
  adminsegHeightUnits,
  adminsegWeightUnits
};
