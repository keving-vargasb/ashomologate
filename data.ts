import {
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

const adminsegGenders: AdminsegGender[] = [
  {
    value: 4,
    name: 'Male',
    appID: 1
  },
  {
    value: 5,
    name: 'Female',
    appID: 2
  }
];

const adminsegProducts: AdminsegProduct[] = [
  {
    value: 3,
    name: 'Easy Term',
    appID: 'p1',
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
    appID: 'ANNUAL'
  },
  {
    value: 15,
    name: 'Monthly',
    payouts: 12,
    appID: 'MONTHLY'
  },
  {
    value: 13,
    name: 'Quarterly',
    payouts: 4,
    appID: 'QUARTERLY'
  },
  {
    value: 11,
    name: 'Semiannual',
    payouts: 2,
    appID: 'SEMMIANNUALLY'
  }
];

const adminsegRelationships: AdminsegRelationship[] = [
  {
    value: 39,
    name: 'Aunt',
    appID: 1
  },
  {
    value: 32,
    name: 'Boyfriend',
    appID: 2
  },
  {
    value: 25,
    name: 'Brother',
    appID: 3
  },
  {
    value: 22,
    name: 'Brother in law',
    appID: 4
  },
  {
    value: 40,
    name: 'Business Partner',
    appID: 5
  },
  {
    value: 42,
    name: 'Collateral Assignment',
    appID: 6
  },
  {
    value: 28,
    name: 'Daughter',
    appID: 7
  },
  {
    value: 41,
    name: 'Employer',
    appID: 8
  },
  {
    value: 24,
    name: 'Ex-Spouse',
    appID: 9
  },
  {
    value: 35,
    name: 'Father',
    appID: 10
  },
  {
    value: 36,
    name: 'Father in law',
    appID: 11
  },
  {
    value: 20,
    name: 'Friendship',
    appID: 12
  },
  {
    value: 33,
    name: 'Girlfriend',
    appID: 13
  },
  {
    value: 31,
    name: 'Granddaughter',
    appID: 14
  },
  {
    value: 18,
    name: 'Grandfather',
    appID: 15
  },
  {
    value: 19,
    name: 'Grandmother',
    appID: 16
  },
  {
    value: 30,
    name: 'Grandson',
    appID: 17
  },
  {
    value: 29,
    name: 'Mother',
    appID: 18
  },
  {
    value: 37,
    name: 'Mother in law',
    appID: 19
  },
  {
    value: 34,
    name: 'Other',
    appID: 20
  },
  {
    value: 26,
    name: 'Sister',
    appID: 21
  },
  {
    value: 23,
    name: 'Sister in law',
    appID: 22
  },
  {
    value: 27,
    name: 'Son',
    appID: 23
  },
  {
    value: 21,
    name: 'Spouse',
    appID: 24
  },
  {
    value: 38,
    name: 'Uncle',
    appID: 25
  }
];

const adminsegPhoneTypes: AdminsegPhoneType[] = [
  {
    value: 3,
    name: 'Fax',
    appID: 3
  },
  {
    value: 2,
    name: 'Home',
    appID: 2
  },
  {
    value: 1,
    name: 'Mobile',
    appID: 1
  }
];

const adminsegIdentityTypes: AdminsegIdentityType[] = [
  {
    value: 1,
    name: 'ID',
    appID: 1
  },
  {
    value: 2,
    name: 'Passport',
    appID: 2
  },
  {
    value: 3,
    name: "Owner's ID",
    appID: 3
  },
  {
    value: 4,
    name: 'Legal Representative',
    appID: 4
  }
];

const adminsegPersonTypes: AdminsegPersonType[] = [
  {
    value: 'lp',
    name: 'legal_person',
    appID: 2
  },
  {
    value: 'rp',
    name: 'real_person',
    appID: 1
  }
];

const adminsegHeightUnits: AdminsegHeightUnit[] = [
  {
    value: 'M',
    name: 'Meters',
    appID: 1
  },
  {
    value: 'FT',
    name: 'Feet and Inch',
    appID: 2
  }
];

const adminsegWeightUnits: AdminsegWeightUnit[] = [
  {
    value: 'KG',
    name: 'Kilograms',
    appID: 1
  },
  {
    value: 'LBS',
    name: 'Pounds',
    appID: 2
  }
];

export {
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
