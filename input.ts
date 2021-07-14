const applicationExample = {
  _id: '60ef0eee626ed4713b3d003d',
  beneficiaries: [
    {
      birthdayDate: '7/14/1980',
      firstName: 'Dfdf',
      id: 'a1d945f9-ef27-433e-9fc6-b88dea54e48a',
      lastName: 'Dfdf',
      order: 0,
      percent: '100',
      personType: {
        id: 1,
        value: 'Individual'
      },
      relationship: {
        id: 0,
        value: 'Brother'
      },
      type: {
        id: 1,
        value: 'Primary'
      }
    }
  ],
  confirmedDate: '2021-07-14T16:24:27.380Z',
  createdAt: '2021-07-14T16:21:02.491Z',
  doctors: [
    {
      conditionTreated: 'A',
      email: 'A',
      id: '7381620c-88f2-4bf6-943f-e82ab985b17e',
      name: 'A',
      phone: 'A'
    }
  ],
  healthData: {
    basal_energy_burned: [],
    biological_sex: {
      value: 'unknown'
    },
    blood_pressure: [],
    body_temperature: [],
    date_birthday: {
      age: null,
      value: null
    },
    distance_cycling: [],
    distance_swimming: [],
    distance_walking_running: [],
    energy_burned: [],
    flights_climbed: [],
    heart_rate_variability: [],
    height: null,
    rate_heart: [],
    steps: [],
    weight: null
  },
  id: '60ef0eee626ed4713b3d003d',
  insurances: {
    acquired: [
      {
        companyName: 'De',
        effectiveDate: '7/14/2021',
        id: '329d7311-644c-400e-a4b4-41260edcbafb',
        memberId: 'D'
      }
    ]
  },
  insuredValue: '100000',
  isLink: false,
  language: 'en',
  ownerIsTheInsured: true,
  payment: {
    amount: 138.97,
    createdAt: '2021-07-14T16:24:46.554Z',
    method: 'CARD',
    name: '15 years / quarterly',
    paymentSchedule: {
      interval: {
        length: 3,
        unit: 'months'
      },
      startDate: '2021-07-14T00:00:00',
      totalOccurrences: 9999,
      trialOccurrences: 0
    },
    profile: {
      customerProfileId: '500616437',
      description: 'Profile created by Subscription: 7525930',
      paymentProfile: {
        billTo: {
          firstName: 'Astest3',
          lastName: 'vargas'
        },
        customerPaymentProfileId: '501022686',
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
    trialAmount: 0
  },
  personalInfo: {
    age: 41,
    dateOfBirth: '7/14/1980',
    fullName: 'Sdsd',
    gender: {
      id: '2',
      value: '2'
    },
    healthData: {
      basal_energy_burned: [],
      biological_sex: {
        value: 'unknown'
      },
      blood_pressure: [],
      body_temperature: [],
      date_birthday: {
        age: null,
        value: null
      },
      distance_cycling: [],
      distance_swimming: [],
      distance_walking_running: [],
      energy_burned: [],
      flights_climbed: [],
      heart_rate_variability: [],
      height: null,
      rate_heart: [],
      steps: [],
      weight: null
    },
    identification: {
      number: 'Sdsdsdsd',
      type: {
        id: 2,
        value: 'Passport'
      }
    },
    location: {
      address1: 'Sdsdsd',
      address2: '',
      city: 'Sdsdsd',
      country: {
        id: 'AR'
      },
      postalCode: ''
    },
    passportData: 'timeout',
    phone: {
      code: '54',
      number: 'sdsdsd'
    }
  },
  questions: [
    {
      id: 'Q_GENDER',
      nameQuestion: 'Q_GENDER',
      numberQuestion: 1,
      response: [
        {
          id: 2,
          value: 'Female'
        }
      ],
      value: 'Gender'
    },
    {
      id: 'Q_SMOKE',
      idQuestion: 'question2',
      nameQuestion: 'Q_SMOKE',
      numberQuestion: 2,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value: 'Have you smoked in the last 12 months?'
    },
    {
      id: 'Q_WEIGHT_HEIGHT',
      idQuestion: 'question3',
      nameQuestion: 'Q_WEIGHT_HEIGHT',
      numberQuestion: 3,
      response: [
        {
          name: 'Height',
          size: {
            id: 1,
            value: 'Cm'
          },
          value: '167'
        },
        {
          name: 'Weight',
          size: {
            id: 1,
            value: 'Kg'
          },
          value: '68'
        }
      ],
      subQuestions: null,
      value: 'What is your height and weight?'
    },
    {
      id: 'Q_ALCOHOL_CONSUMPTION',
      idQuestion: 'question4',
      nameQuestion: 'Q_ALCOHOL_CONSUMPTION',
      numberQuestion: 4,
      response: [
        {
          id: 0,
          value: '< 5'
        }
      ],
      subQuestions: null,
      value: 'Which best describes your alcohol consumption? (drinks per week)'
    },
    {
      id: 'Q_MEMBER_FOLLOWING_POSITION',
      idQuestion: 'question5',
      nameQuestion: 'Q_MEMBER_FOLLOWING_POSITION',
      numberQuestion: 5,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value:
        'Have you or any member of your direct family held any of the following positions?'
    },
    {
      detail: [
        {
          '0': {
            name: 'Insurance Company',
            value: 'De'
          },
          '1': {
            name: 'Member ID',
            value: 'D'
          },
          '2': {
            name: 'Effective Date',
            value: '7/14/2021'
          }
        }
      ],
      id: 'Q_CURRENTLY_COVERAGE',
      idQuestion: 'question6',
      nameQuestion: 'Q_CURRENTLY_COVERAGE',
      numberQuestion: 6,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value:
        'At the time of this application do you currently have health insurance with coverage for the last 12 months?'
    },
    {
      id: 'Q_INSURANCE_POLICY_DENIED',
      idQuestion: 'question7',
      nameQuestion: 'Q_INSURANCE_POLICY_DENIED',
      numberQuestion: 7,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value:
        'Have you ever had a life or health insurance policy that has been denied, rated or issued with restrictions?'
    },
    {
      id: 'Q_EXTREME_ACTIVITIES',
      idQuestion: 'question8',
      nameQuestion: 'Q_EXTREME_ACTIVITIES',
      numberQuestion: 8,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value: 'Do you participate in any of the following Extreme Activities?'
    },
    {
      id: 'Q_DRUGS',
      idQuestion: 'question9',
      nameQuestion: 'Q_DRUGS',
      numberQuestion: 9,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value: 'Do you have any history of substance abuse?'
    },
    {
      id: 'Q_TREATMENT_HOSPITALIZED',
      idQuestion: 'question10',
      nameQuestion: 'Q_TREATMENT_HOSPITALIZED',
      numberQuestion: 10,
      response: null,
      subQuestions: [
        {
          id: 'Q_TREATMENT_HOSPITALIZED_1',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Cancer, tumor, leukemia, lymphoma, malignant lesion?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_2',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Disorder of the stomach or digestive system?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_3',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Anemia, organ transplant, AIDS, or HIV?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_4',
          response: {
            id: 1,
            value: 'Yes'
          },
          value:
            'High blood pressure/hypertension, high cholesterol, heart attack or any other disorder of the heart or circulatory system?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_5',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Respiratory illnesses, diseases of the lungs or asthma?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_6',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Seizures, paralysis or any other neurological disorder?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_7',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Diabetes?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_8',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Depression mental or anxiety disorder?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_9',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Sexually transmitted diseases?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_10',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Kidney or urinary system disorder?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_11',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Disorders of the bones, joints, or muscles?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_12',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Immune system or connective tissue disorder?'
        }
      ],
      value:
        'Have you ever been diagnosed, received treatment or hospitalized for the following?'
    },
    {
      id: 'Q_SOME_DISEASE',
      idQuestion: 'question11',
      nameQuestion: 'Q_SOME_DISEASE',
      numberQuestion: 11,
      response: null,
      subQuestions: [
        {
          id: 'Q_SOME_DISEASE_1',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'High blood pressure/hypertension:'
        },
        {
          id: 'Q_SOME_DISEASE_2',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'High cholesterol:'
        },
        {
          id: 'Q_SOME_DISEASE_3',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Heart attack:'
        },
        {
          id: 'Q_SOME_DISEASE_4',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Angina:'
        },
        {
          id: 'Q_SOME_DISEASE_5',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Arrhythmia / pacemaker:'
        },
        {
          id: 'Q_SOME_DISEASE_6',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Aneurysm:'
        },
        {
          id: 'Q_SOME_DISEASE_7',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Stroke:'
        },
        {
          id: 'Q_SOME_DISEASE_8',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Transient ischemic attack (TIA):'
        },
        {
          id: 'Q_SOME_DISEASE_9',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Heart valve disease / murmur:'
        },
        {
          id: 'Q_SOME_DISEASE_10',
          response: {
            id: 0,
            value: 'No'
          },
          value: 'Other heart or circulatory disease:'
        }
      ],
      value: 'Have you ever had any of the following?'
    },
    {
      id: 'Q_SOME_FAMILY_DIED_FROM_DISEASE',
      idQuestion: 'question14',
      nameQuestion: 'Q_SOME_FAMILY_DIED_FROM_DISEASE',
      numberQuestion: 14,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value:
        'Have any of your direct family members died from cerebrovascular disease, coronary artery disease, heart disease or heart attacks prior to age 65?'
    },
    {
      id: 'Q_PENDING_SURGERY',
      idQuestion: 'question21',
      nameQuestion: 'Q_PENDING_SURGERY',
      numberQuestion: 21,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value: 'Do you have a pending or planned surgery/procedure?'
    },
    {
      id: 'Q_ABNORMAL_RESULTS_SURGERIES',
      idQuestion: 'question22',
      nameQuestion: 'Q_ABNORMAL_RESULTS_SURGERIES',
      numberQuestion: 22,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value:
        'Have you had any surgeries, abnormal results, or diseases not previously mentioned?'
    },
    {
      detail: [
        {
          '0': {
            name: 'Name',
            value: 'A'
          },
          '1': {
            name: 'Email address',
            value: 'A'
          },
          '2': {
            name: 'Phone number',
            value: 'A'
          },
          '3': {
            name: 'Condition treated',
            value: 'A'
          }
        }
      ],
      id: 'Q_HEALTHCARE_PROVIDER',
      idQuestion: 'question25',
      nameQuestion: 'Q_HEALTHCARE_PROVIDER',
      numberQuestion: 25,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value:
        'Do you have a physician and/or any healthcare provider that has treated you?'
    },
    {
      id: 'Q_ADMITTED_HOSPITAL',
      idQuestion: 'question26',
      nameQuestion: 'Q_ADMITTED_HOSPITAL',
      numberQuestion: 26,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value: 'Have you been admitted to a hospital within the last 24 months?'
    },
    {
      id: 'Q_SOME_DISEASE_PAST_DAYS',
      idQuestion: 'question27',
      nameQuestion: 'Q_SOME_DISEASE_PAST_DAYS',
      numberQuestion: 27,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value: 'In the past 14 days, have you had any of the following?'
    },
    {
      id: 'Q_POSITIVE_RESULT_COVID_TEST',
      idQuestion: 'question28',
      nameQuestion: 'Q_POSITIVE_RESULT_COVID_TEST',
      numberQuestion: 28,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value: 'Have you had a positive test result for COVID-19/SARS-CoV2?'
    },
    {
      id: 'Q_AWAITING_RESULT_COVID_TEST',
      idQuestion: 'question29',
      nameQuestion: 'Q_AWAITING_RESULT_COVID_TEST',
      numberQuestion: 29,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value:
        'Are you currently awaiting a test result or need to be tested for COVID-19/SARS-CoV2?'
    },
    {
      id: 'HAVE_CONTACT_SOMEONE_COVID_CONTAGED',
      idQuestion: 'question30',
      nameQuestion: 'HAVE_CONTACT_SOMEONE_COVID_CONTAGED',
      numberQuestion: 30,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value:
        'Within the last 14 days, have you been in contact with someone diagnosed with COVID-19/SARS-CoV2 or been under quarantine?'
    },
    {
      id: 'Q_TRAVELED_PAST_DAYS',
      idQuestion: 'question31',
      nameQuestion: 'Q_TRAVELED_PAST_DAYS',
      numberQuestion: 31,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value:
        'In the past 14 days have you traveled or been out of your city of residence?'
    },
    {
      id: 'Q_TAKE_MEDICATION',
      idQuestion: 'question32',
      nameQuestion: 'Q_TAKE_MEDICATION',
      numberQuestion: 32,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value: 'Do you take any medication?'
    }
  ],
  selectedPlan: {
    description: '',
    frequency: {
      id: 'QUARTERLY',
      label: 'quarterly'
    },
    id: 2,
    rate: '138.97',
    term: {
      id: 'T15',
      label: '15 years',
      years: 15
    }
  },
  status: {
    id: 'completed',
    value: 'Completed'
  },
  user: {
    email: 'astest3@gmail.com',
    phone: null,
    uid: 'Ql03qktbl7hTw92pSAkS76GceSh1'
  }
};
export { applicationExample };
