const applicationExample = {
  _id: '60eefe8c626ed4713b3d003b',
  beneficiaries: [
    {
      birthdayDate: '7/14/1980',
      firstName: 'Dfdf',
      id: '22f7f50b-bb83-43e7-8ad1-8c54f53f46f4',
      lastName: 'Dfdf',
      order: 0,
      percent: '100',
      personType: {
        id: 1,
        value: 'Individual'
      },
      relationship: {
        id: 4,
        value: 'Sister'
      },
      type: {
        id: 1,
        value: 'Primary'
      }
    }
  ],
  confirmedDate: '2021-07-14T16:04:52.160Z',
  covid: [
    {
      currentlySymptoms: false,
      id: 'a33e5ef6-eacb-4674-9a6e-cf2270146b6b',
      isPositive: true,
      testDate: '7/14/2021'
    }
  ],
  createdAt: '2021-07-14T15:11:08.643Z',
  doctors: [
    {
      conditionTreated: 'Dfdf',
      email: 'Dfdf',
      id: 'f578aa31-46ea-4609-838f-c8399f07def6',
      name: 'Dfdf',
      phone: 'Dfdfdfdfdf'
    }
  ],
  healthData: {},
  id: '60eefe8c626ed4713b3d003b',
  insurances: {
    acquired: [
      {
        companyName: 'Sura',
        effectiveDate: '7/14/2021',
        id: '6b73a2aa-81e2-439e-83fd-ae7977247b4b',
        memberId: 'Sdsd'
      }
    ],
    denied: [
      {
        details: 'Dfdf ddfdf dfdf',
        id: '723b8ad0-75f3-474c-aabe-269889c0e03e',
        type: 0,
        value: 'Life Insurance'
      }
    ]
  },
  insuredValue: '100000',
  isLink: false,
  language: 'en',
  medicines: [
    {
      condition: 'A',
      dosage: 'Aa',
      id: 'a6cc21f6-56e8-42ba-be5b-77849d9caeb6',
      name: 'A'
    }
  ],
  owner: {
    address: 'Sdsd',
    city: {
      id: '12668',
      value: 'Candelaria'
    },
    country: {
      id: 'CO',
      value: 'Colombia'
    },
    fullName: 'Sdsd',
    identification: {
      number: 'Sdsd',
      type: '1'
    },
    jointOwner: 'Ssdsd',
    relationship: {
      id: 3,
      value: 'Brother in law'
    }
  },
  ownerIsTheInsured: false,
  payment: {
    subscriptionId: '7525911',
    amount: 60.38,
    createdAt: '2021-07-14T16:05:14.424Z',
    method: 'CARD',
    name: '10 years / monthly',
    paymentSchedule: {
      interval: {
        length: 1,
        unit: 'months'
      },
      startDate: '2021-07-14T00:00:00',
      totalOccurrences: 9999,
      trialOccurrences: 0
    },
    profile: {
      customerProfileId: '500615866',
      description: 'Profile created by Subscription: 7525911',
      paymentProfile: {
        billTo: {
          firstName: 'Juanit',
          lastName: 'astes1'
        },
        customerPaymentProfileId: '501022112',
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
    fullName: 'Astest1',
    gender: {
      id: '1',
      value: '1'
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
      number: '1014294582',
      type: {
        id: 1,
        value: 'ID'
      }
    },
    location: {
      address1: 'Sdsdsd',
      address2: 'Sdsdsd',
      city: 'Sdsdsd',
      country: {
        id: 'BR'
      },
      postalCode: 'Sdsd'
    },
    passportData: "'NoneType' object has no attribute 'to_dict'",
    phone: {
      code: '55',
      number: '3123010242'
    }
  },
  questions: [
    {
      id: 'Q_GENDER',
      nameQuestion: 'Q_GENDER',
      numberQuestion: 1,
      response: [
        {
          id: 1,
          value: 'Male'
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
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value: 'Have you smoked in the last 12 months?'
    },
    {
      id: 'Q_MEMBER_FOLLOWING_POSITION',
      idQuestion: 'question5',
      nameQuestion: 'Q_MEMBER_FOLLOWING_POSITION',
      numberQuestion: 5,
      response: [
        {
          id: 1,
          value: 'Yes'
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
            value: 'Sura'
          },
          '1': {
            name: 'Member ID',
            value: 'Sdsd'
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
      detail: [
        {
          Details: 'Dfdf ddfdf dfdf',
          'Was this related': {
            id: 0,
            value: 'Life Insurance'
          }
        }
      ],
      id: 'Q_INSURANCE_POLICY_DENIED',
      idQuestion: 'question7',
      nameQuestion: 'Q_INSURANCE_POLICY_DENIED',
      numberQuestion: 7,
      response: [
        {
          id: 1,
          value: 'Yes'
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
          id: 1,
          value: 'Yes'
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
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value: 'Do you have any history of substance abuse?'
    },
    {
      id: 'Q_SOME_FAMILY_DIED_FROM_DISEASE',
      idQuestion: 'question14',
      nameQuestion: 'Q_SOME_FAMILY_DIED_FROM_DISEASE',
      numberQuestion: 14,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value:
        'Have any of your direct family members died from cerebrovascular disease, coronary artery disease, heart disease or heart attacks prior to age 65?'
    },
    {
      id: 'Q_TAKE_INSULIN',
      idQuestion: 'question16',
      nameQuestion: 'Q_TAKE_INSULIN',
      numberQuestion: 16,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value: 'Do you take insulin to manage diabetes?'
    },
    {
      id: 'Q_HAVE_FOLLOWING_CONDITIONS',
      idQuestion: 'question19',
      nameQuestion: 'Q_HAVE_FOLLOWING_CONDITIONS',
      numberQuestion: 19,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value: 'Do you have any of the following conditions?'
    },
    {
      id: 'Q_CURRENTLY_DISABLED',
      idQuestion: 'question20',
      nameQuestion: 'Q_CURRENTLY_DISABLED',
      numberQuestion: 20,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value: 'Are you currently disabled?'
    },
    {
      detail: [
        {
          Details: 'Dffdf dfdf'
        }
      ],
      id: 'Q_PENDING_SURGERY',
      idQuestion: 'question21',
      nameQuestion: 'Q_PENDING_SURGERY',
      numberQuestion: 21,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value: 'Do you have a pending or planned surgery/procedure?'
    },
    {
      detail: [
        {
          Details: 'A'
        }
      ],
      id: 'Q_ABNORMAL_RESULTS_SURGERIES',
      idQuestion: 'question22',
      nameQuestion: 'Q_ABNORMAL_RESULTS_SURGERIES',
      numberQuestion: 22,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value:
        'Have you had any surgeries, abnormal results, or diseases not previously mentioned?'
    },
    {
      id: 'Q_ANY_TREATMENT',
      idQuestion: 'question23',
      nameQuestion: 'Q_ANY_TREATMENT',
      numberQuestion: 23,
      response: [
        {
          id: 0,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value: 'Were you recommended for any treatment?'
    },
    {
      id: 'Q_RESULTS_TREATMENT',
      idQuestion: 'question24',
      nameQuestion: 'Q_RESULTS_TREATMENT',
      numberQuestion: 24,
      response: [
        {
          id: 0,
          value: 'I am the same'
        }
      ],
      subQuestions: null,
      value: 'If you were recommended treatment, what was the outcome?'
    },
    {
      detail: [
        {
          '0': {
            name: 'Name',
            value: 'Dfdf'
          },
          '1': {
            name: 'Email address',
            value: 'Dfdf'
          },
          '2': {
            name: 'Phone number',
            value: 'Dfdfdfdfdf'
          },
          '3': {
            name: 'Condition treated',
            value: 'Dfdf'
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
      detail: [
        {
          Details: 'A'
        }
      ],
      id: 'Q_ADMITTED_HOSPITAL',
      idQuestion: 'question26',
      nameQuestion: 'Q_ADMITTED_HOSPITAL',
      numberQuestion: 26,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value: 'Have you been admitted to a hospital within the last 24 months?'
    },
    {
      detail: [
        {
          Details: 'De'
        }
      ],
      id: 'Q_SOME_DISEASE_PAST_DAYS',
      idQuestion: 'question27',
      nameQuestion: 'Q_SOME_DISEASE_PAST_DAYS',
      numberQuestion: 27,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value: 'In the past 14 days, have you had any of the following?'
    },
    {
      detail: [
        {
          'Are you currently free of symptoms and fully recovered?': {
            id: 1,
            value: 'Yes'
          },
          'When was your positive test result?': '7/14/2021'
        }
      ],
      id: 'Q_POSITIVE_RESULT_COVID_TEST',
      idQuestion: 'question28',
      nameQuestion: 'Q_POSITIVE_RESULT_COVID_TEST',
      numberQuestion: 28,
      response: [
        {
          id: 1,
          value: 'Yes'
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
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value:
        'Are you currently awaiting a test result or need to be tested for COVID-19/SARS-CoV2?'
    },
    {
      detail: [
        {
          Details: 'A'
        }
      ],
      id: 'HAVE_CONTACT_SOMEONE_COVID_CONTAGED',
      idQuestion: 'question30',
      nameQuestion: 'HAVE_CONTACT_SOMEONE_COVID_CONTAGED',
      numberQuestion: 30,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value:
        'Within the last 14 days, have you been in contact with someone diagnosed with COVID-19/SARS-CoV2 or been under quarantine?'
    },
    {
      detail: [
        {
          Details: 'A'
        }
      ],
      id: 'Q_TRAVELED_PAST_DAYS',
      idQuestion: 'question31',
      nameQuestion: 'Q_TRAVELED_PAST_DAYS',
      numberQuestion: 31,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value:
        'In the past 14 days have you traveled or been out of your city of residence?'
    },
    {
      detail: [
        {
          '0': {
            name: 'Name',
            value: 'A'
          },
          '1': {
            name: 'Dosage',
            value: 'Aa'
          },
          '2': {
            name: 'Reason',
            value: 'A'
          }
        }
      ],
      id: 'Q_TAKE_MEDICATION',
      idQuestion: 'question32',
      nameQuestion: 'Q_TAKE_MEDICATION',
      numberQuestion: 32,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value: 'Do you take any medication?'
    },
    {
      id: 'Q_DOSAGE_CHANGED',
      idQuestion: 'question33',
      nameQuestion: 'Q_DOSAGE_CHANGED',
      numberQuestion: 33,
      response: [
        {
          id: 1,
          value: 'Yes'
        }
      ],
      subQuestions: null,
      value:
        'Has your medication type or dosage changed in the past six months?'
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
            id: 1,
            value: 'Yes'
          },
          value: 'Cancer, tumor, leukemia, lymphoma, malignant lesion?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_2',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Disorder of the stomach or digestive system?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_3',
          response: {
            id: 1,
            value: 'Yes'
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
            id: 1,
            value: 'Yes'
          },
          value: 'Respiratory illnesses, diseases of the lungs or asthma?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_6',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Seizures, paralysis or any other neurological disorder?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_7',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Diabetes?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_8',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Depression mental or anxiety disorder?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_9',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Sexually transmitted diseases?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_10',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Kidney or urinary system disorder?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_11',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Disorders of the bones, joints, or muscles?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_12',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Immune system or connective tissue disorder?'
        }
      ],
      value:
        'Have you ever been diagnosed, received treatment or hospitalized for the following?'
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
      id: 'Q_SOME_DISEASE',
      idQuestion: 'question11',
      nameQuestion: 'Q_SOME_DISEASE',
      numberQuestion: 11,
      response: null,
      subQuestions: [
        {
          id: 'Q_SOME_DISEASE_1',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'High blood pressure/hypertension:'
        },
        {
          id: 'Q_SOME_DISEASE_2',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'High cholesterol:'
        },
        {
          id: 'Q_SOME_DISEASE_3',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Heart attack:'
        },
        {
          id: 'Q_SOME_DISEASE_4',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Angina:'
        },
        {
          id: 'Q_SOME_DISEASE_5',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Arrhythmia / pacemaker:'
        },
        {
          id: 'Q_SOME_DISEASE_6',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Aneurysm:'
        },
        {
          id: 'Q_SOME_DISEASE_7',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Stroke:'
        },
        {
          id: 'Q_SOME_DISEASE_8',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Transient ischemic attack (TIA):'
        },
        {
          id: 'Q_SOME_DISEASE_9',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Heart valve disease / murmur:'
        },
        {
          id: 'Q_SOME_DISEASE_10',
          response: {
            id: 1,
            value: 'Yes'
          },
          value: 'Other heart or circulatory disease:'
        }
      ],
      value: 'Have you ever had any of the following?'
    },
    {
      id: 'Q_BLOOD_PRESSURE_MULTIPLE',
      idQuestion: 'question12',
      nameQuestion: 'Q_BLOOD_PRESSURE_MULTIPLE',
      numberQuestion: 12,
      response: null,
      subQuestions: [
        {
          id: 'Q_BLOOD_PRESSURE_MULTIPLE_1',
          response: '12',
          value:
            'How old were you when you were diagnosed with high blood pressure?'
        },
        {
          id: 'Q_BLOOD_PRESSURE_MULTIPLE_2',
          response: {
            id: 0,
            value: '120/80 - 140/85 mmHg'
          },
          value: 'What was your last blood pressure reading?'
        },
        {
          id: 'Q_BLOOD_PRESSURE_MULTIPLE_3',
          response: {
            id: 1,
            value: 'Within 1 to 3 months'
          },
          value: 'When was this reading taken?'
        }
      ],
      value:
        "key 'Q_BLOOD_PRESSURE_MULTIPLE.title (en)' returned an object instead of string."
    },
    {
      id: 'Q_ABNORMAL_RESULTS',
      idQuestion: 'question13',
      nameQuestion: 'Q_ABNORMAL_RESULTS',
      numberQuestion: 13,
      response: [
        {
          id: 0,
          value: 'EKG'
        },
        {
          id: 1,
          value: 'Stress Test (treadmill EKG)'
        },
        {
          id: 2,
          value: 'Echocardiogram'
        },
        {
          id: 3,
          value: 'Urinalysis'
        },
        {
          id: 4,
          value: 'Kidney Function Test'
        },
        {
          id: 4,
          value: 'Kidney Function Test'
        },
        {
          id: 4,
          value: 'Kidney Function Test'
        },
        {
          id: 4,
          value: 'Kidney Function Test'
        },
        {
          id: 4,
          value: 'Kidney Function Test'
        },
        {
          id: 4,
          value: 'Kidney Function Test'
        },
        {
          id: 4,
          value: 'Kidney Function Test'
        },
        {
          id: 4,
          value: 'Kidney Function Test'
        },
        {
          id: 4,
          value: 'Kidney Function Test'
        },
        {
          id: 4,
          value: 'Kidney Function Test'
        }
      ],
      subQuestions: null,
      value: 'Have you had abnormal results for any of the following?'
    },
    {
      id: 'Q_HIGH_CHOLESTEROL_MULTIPLE',
      idQuestion: 'question15',
      nameQuestion: 'Q_HIGH_CHOLESTEROL_MULTIPLE',
      numberQuestion: 15,
      response: null,
      subQuestions: [
        {
          id: 'Q_HIGH_CHOLESTEROL_MULTIPLE_1',
          response: '12',
          value:
            'How old were you when you were diagnosed with high cholesterol?'
        },
        {
          id: 'Q_HIGH_CHOLESTEROL_MULTIPLE_2',
          response: {
            id: 0,
            value: '110-199 mg/dl = 2.84 –5.16 mmol/l'
          },
          value: 'What were your most recent total cholesterol levels?'
        },
        {
          id: 'Q_HIGH_CHOLESTEROL_MULTIPLE_3',
          response: {
            id: 0,
            value: 'Less than 18 months ago'
          },
          value: 'When was this test done?'
        },
        {
          id: 'Q_HIGH_CHOLESTEROL_MULTIPLE_4',
          response: {
            id: 0,
            value: 'Between 150-249 mg/dl'
          },
          value: 'What were your most recent triglyceride levels?'
        },
        {
          id: 'Q_HIGH_CHOLESTEROL_MULTIPLE_5',
          response: {
            id: 0,
            value: 'Less than 18 months ago'
          },
          value: 'When was this last test done?'
        }
      ],
      value:
        "key 'Q_HIGH_CHOLESTEROL_MULTIPLE.title (en)' returned an object instead of string."
    },
    {
      id: 'Q_DIABETES_MULTIPLE',
      idQuestion: 'question17',
      nameQuestion: 'Q_DIABETES_MULTIPLE',
      numberQuestion: 17,
      response: null,
      subQuestions: [
        {
          id: 'Q_DIABETES_MULTIPLE_1',
          response: '12',
          value: 'How old were you when you were diagnosed with Diabetes'
        },
        {
          id: 'Q_DIABETES_MULTIPLE_2',
          response: {
            id: 0,
            value: 'Under 6.5'
          },
          value: 'What was your most recent A1C level?'
        },
        {
          id: 'Q_DIABETES_MULTIPLE_3',
          response: {
            id: 0,
            value: 'Within the last 6 months'
          },
          value: 'When was this test done?'
        }
      ],
      value:
        "key 'Q_DIABETES_MULTIPLE.title (en)' returned an object instead of string."
    },
    {
      id: 'Q_COMPLICATIONS_DIABETES',
      idQuestion: 'question18',
      nameQuestion: 'Q_COMPLICATIONS_DIABETES',
      numberQuestion: 18,
      response: [
        {
          id: 0,
          value: 'Gangrene/amputation'
        },
        {
          id: 1,
          value: 'Eye disorder (retinopathy)'
        },
        {
          id: 2,
          value: 'Peripheral vascular disease/ulcers'
        },
        {
          id: 3,
          value: 'Neuropathy (i.e. altered sensation in feet)'
        },
        {
          id: 4,
          value: 'Hypoglycemic coma'
        },
        {
          id: 4,
          value: 'Hypoglycemic coma'
        },
        {
          id: 4,
          value: 'Hypoglycemic coma'
        },
        {
          id: 4,
          value: 'Hypoglycemic coma'
        },
        {
          id: 4,
          value: 'Hypoglycemic coma'
        },
        {
          id: 4,
          value: 'Hypoglycemic coma'
        },
        {
          id: 4,
          value: 'Hypoglycemic coma'
        },
        {
          id: 4,
          value: 'Hypoglycemic coma'
        },
        {
          id: 4,
          value: 'Hypoglycemic coma'
        },
        {
          id: 4,
          value: 'Hypoglycemic coma'
        }
      ],
      subQuestions: null,
      value: 'Have you had any of the following complications with diabetes?'
    }
  ],
  selectedPlan: {
    description: '',
    frequency: {
      id: 'MONTHLY',
      label: 'monthly'
    },
    id: 1,
    rate: '60.38',
    term: {
      id: 'T10',
      label: '10 years',
      years: 10
    }
  },
  status: {
    id: 'completed',
    value: 'Completed'
  },
  user: {
    email: 'astest1@gmail.com',
    phone: null,
    uid: 'gz1sGv3VUDOKRuLJUlsnGlLZ00X2'
  }
};
export { applicationExample };
