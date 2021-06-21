const applicationExample = {
  _id: 'abc123',
  status: {
    id: 'started',
    value: 'Iniciado'
  },
  agent: {
    uid: 'agent1'
  },
  user: {
    uid: 'user1',
    email: 'user1@gmail.com',
    phone: '+573123010242'
  },
  applicationFromAgent: false,
  confirmedDate: '2021-01-01 10:00:00',
  insuredValue: 50000,
  ownerIsTheInsured: true,
  product: {
    id: 'p1',
    value: 'Easy term'
  },
  language: {
    id: 'en',
    value: 'English'
  },
  personalInfo: {
    age: 55,
    fullName: 'Kevin Vargas',
    birthdayDate: '2021-01-01',
    gender: {
      id: 1,
      value: 'Male'
    },
    location: {
      country: {
        id: 'COL',
        value: 'Colombia'
      },
      city: {
        id: '1',
        value: 'Colombia'
      },
      address1: 'Calle 69 bis',
      address2: null,
      postalCode: '111031'
    },
    indentification: {
      type: {
        id: 1,
        value: 'ID'
      },
      number: '1014294582'
    },
    healthData: {
      error: null,
      data: {}
    },
    passportData: {
      error: null,
      data: {}
    },
    measures: {
      height: {
        measurementUnit: 1,
        value: 55
      },
      weight: {
        measurementUnit: 1,
        value: 80
      }
    }
  },
  owner: {
    address: 'Call 69',
    city: {
      id: 1,
      value: 'Bogotá'
    },
    country: {
      id: 'CO',
      value: 'Colombia'
    },
    fullName: 'Kevin Vargas',
    indentification: {
      type: {
        id: 1,
        value: 'ID'
      },
      number: '1014294582'
    },
    jointOwner: 'wtf',
    relationship: {
      id: 27,
      value: 'Son'
    }
  },
  beneficiaries: [
    {
      id: 'beneficiary1',
      order: 1,
      personType: {
        id: 2,
        value: 'Legal person'
      },
      type: {
        id: 1,
        value: 'sdsdsd'
      },
      birthdayDate: '2021-01-01',
      firstName: 'Kevin Giovany',
      lastName: 'Vargas Benavides',
      percent: 100,
      relationship: {
        id: 3,
        value: 'Son'
      }
    }
  ],
  selectedPlan: {
    id: 1,
    description: 'Hola a todos',
    frequency: {
      id: 'MONTHLY',
      value: 'mensual'
    },
    price: 50,
    term: {
      id: 'T10',
      value: '10 Years'
    }
  },
  legal: {
    acceptConditionAddress: true,
    agreeInformation: true,
    acceptTerms: true,
    acceptTermsDate: '2021-01-01 10:00:00'
  },
  insurances: {
    acquired: [
      {
        id: 'kaghskujhk23234',
        companyName: 'SURA',
        memberId: 'memberId',
        effectiveDate: '2021-01-01'
      }
    ],
    denied: [
      {
        id: 'sdsdfs3434',
        type: 'INSURANCE_LIFE',
        value: 'Seguro de vida',
        details: 'Bla bla bla'
      }
    ]
  },
  doctors: [
    {
      id: 'D1',
      name: 'Juan Moncada',
      email: 'j@gmail.com',
      phone: '3123010242',
      conditionTreated: 'Prostata'
    }
  ],
  medicines: [
    {
      id: 'M1',
      name: 'Acetaminofem',
      dosage: '100 mg',
      condition: 'por fiebre'
    }
  ],
  covid: {
    tests: [
      {
        id: 'Test1',
        isPositive: 'False',
        testDate: '2021-02-05'
      }
    ],
    currentlySymptoms: true
  },
  questions: [
    {
      id: 'Q_SMOKE',
      value: 'Drogas ....',
      type: 'bool',
      response: [
        {
          id: '1',
          value: 'Yes'
        }
      ],
      subQuestion: null
    },
    {
      id: 'Q_TREATMENT_HOSPITALIZED',
      value: 'Tratamientos...',
      type: null,
      response: null,
      subQuestion: [
        {
          id: 'Q_TREATMENT_HOSPITALIZED_1',
          value: 'Cancer, tumor, leukemia, lymphoma, malignant lesion?',
          type: 'bool',
          response: [
            {
              id: '1',
              value: 'Yes'
            }
          ]
        }
      ]
    }
  ]
};

export { applicationExample };
