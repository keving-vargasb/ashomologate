const applicationExample = {
  _id: 'abc123',
  uuid: 'abc123',
  status: {
    id: 'started',
    value: 'Iniciado'
  },
  agent: {
    uid: 'agent1',
    code: 'AMX-341'
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
      id: 'COL',
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
      id: 25,
      value: 'Son'
    }
  },
  beneficiaries: [
    {
      id: 'beneficiary1',
      order: 1,
      personType: {
        id: 1,
        value: 'Real person'
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
      years: 10,
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
  payment: {
    amount: 46.77,
    createdAt: '2021-04-22T00:34:55.367Z',
    name: '10 years / monthly',
    paymentSchedule: {
      interval: {
        length: 1,
        unit: 'months'
      },
      startDate: '2021-04-21T00:00:00',
      totalOccurrences: 9999,
      trialOccurrences: 0
    },
    profile: {
      customerProfileId: '1518237551',
      description: 'Profile created by Subscription: 7355069',
      paymentProfile: {
        billTo: {
          firstName: 'Efdfgh',
          lastName: 'sfdg'
        },
        customerPaymentProfileId: '1517362821',
        customerType: 'individual',
        payment: {
          creditCard: {
            cardNumber: 'XXXX1111',
            expirationDate: 'XXXX'
          }
        }
      }
    },
    status: 'active',
    subscriptionId: '7355069',
    trialAmount: 0
  },
  questions: [
    {
      id: 'Q_SMOKE',
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ]
    },
    {
      id: 'Q_ALCOHOL_CONSUMPTION',
      response: [
        {
          id: 0,
          value: 'Less than 5 drinks per week'
        }
      ]
    },
    {
      id: 'Q_MEMBER_FOLLOWING_POSITION',
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ]
    }
  ]
};

export { applicationExample };

/**
 * 
 * 
 *     {
      id: 'Q_TREATMENT_HOSPITALIZED',
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
 */
