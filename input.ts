const applicationExample = {
  _id: '60ef101e626ed4713b3d003e',
  agent: {
    code: 'AMX-345',
    email: 'kevin@vantageio.com',
    uid: 'cibHKyuAt7d0eFni0Fr2t4Yiy1m2'
  },
  applicationFromAgent: true,
  beneficiaries: [
    {
      birthdayDate: '7/14/1980',
      firstName: 'Ddfdf',
      id: 'c896b98a-9c01-4211-83a3-4c3420a09a7c',
      lastName: 'Dfdf',
      order: 0,
      percent: '100',
      personType: {
        id: 1,
        value: 'Individual'
      },
      relationship: {
        id: 1,
        value: 'Hija'
      },
      type: {
        id: 1,
        value: 'Primario'
      }
    }
  ],
  confirmedDate: '2021-07-14T16:31:17.741Z',
  contactInfo: {
    familyName: 'Vargas',
    finalPhone: '+578954574411',
    fullName: 'Astest4 Vargas',
    givenName: 'Astest4',
    phone: '+578954574411',
    phoneId: 'DBAFF6B7-A8E5-4FAD-B437-C4627383536D:ABPerson',
    uid: 'twNoLCDuKhYztXZUzjKnTJmv8y13'
  },
  createdAt: '2021-07-14T16:26:06.783Z',
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
  id: '60ef101e626ed4713b3d003e',
  insuredValue: '100000',
  isLink: false,
  language: 'es',
  ownerIsTheInsured: true,
  payment: {
    amount: 138.97,
    createdAt: '2021-07-14T16:31:36.673Z',
    method: 'CARD',
    name: '10 años / quarterly',
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
      customerProfileId: '500616562',
      description: 'Profile created by Subscription: 7525936',
      paymentProfile: {
        billTo: {
          firstName: 'Astest4',
          lastName: 'vargas'
        },
        customerPaymentProfileId: '501022804',
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
      number: 'Sdsd',
      type: {
        id: 1,
        value: 'Identificación'
      }
    },
    location: {
      address1: 'Sdsd',
      address2: '',
      city: 'Sdsd',
      country: {
        id: 'AR'
      },
      postalCode: ''
    },
    passportData: "'NoneType' object has no attribute 'to_dict'",
    phone: {
      code: '54',
      number: 'sdsd'
    }
  },
  product: {
    id: 'p1',
    value: null
  },
  questions: [
    {
      id: 'Q_GENDER',
      numberQuestion: 1,
      response: [
        {
          id: 1,
          value: 'Masculino'
        }
      ],
      value: 'Gender'
    },
    {
      id: 'Q_SMOKE',
      numberQuestion: 2,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      value: 'Smoker'
    },
    {
      id: 'Q_WEIGHT_HEIGHT',
      idQuestion: 'question3',
      nameQuestion: 'Q_WEIGHT_HEIGHT',
      numberQuestion: 3,
      response: [
        {
          name: 'Estatura',
          size: {
            id: 1,
            value: 'Cm'
          },
          value: '167'
        },
        {
          name: 'Peso',
          size: {
            id: 1,
            value: 'Kg'
          },
          value: '68'
        }
      ],
      subQuestions: null,
      value: '¿Cuál es su estatura y peso?'
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
      value:
        '¿Como describe su consumo de bebidas alcohólicas? (Bebidas por semana)'
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
        '¿Usted o algún miembro de su familia directa ha ocupado alguno de los siguientes puestos?'
    },
    {
      id: 'Q_CURRENTLY_COVERAGE',
      idQuestion: 'question6',
      nameQuestion: 'Q_CURRENTLY_COVERAGE',
      numberQuestion: 6,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value:
        '¿Al momento de esta solicitud, cuenta con cobertura de seguro de salud por los últimos 12 meses?'
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
        '¿Alguna vez ha tenido una póliza de seguro de vida o salud que ha sido declinada, sobretasada o emitida con restricciones?'
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
      value: '¿Participa usted en alguno de los siguientes deportes Extremos?'
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
      value: '¿Tiene usted historial de abuso de sustancias?'
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
          value: '¿Cáncer, tumor, leucemia, linfoma, lesión maligna?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_2',
          response: {
            id: 0,
            value: 'No'
          },
          value: '¿Trastorno del estómago o del sistema digestivo?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_3',
          response: {
            id: 0,
            value: 'No'
          },
          value: '¿Anemia, trasplante de órganos, SIDA o VIH?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_4',
          response: {
            id: 0,
            value: 'No'
          },
          value:
            '¿Presión arterial alta, colesterol alto, ataque cardíaco o cualquier otro trastorno del corazón o del sistema circulatorio?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_5',
          response: {
            id: 0,
            value: 'No'
          },
          value:
            '¿Enfermedades de los pulmones o del sistema respiratorio o Asma?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_6',
          response: {
            id: 0,
            value: 'No'
          },
          value:
            '¿Convulsiones, parálisis o cualquier otro trastorno neurológico?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_7',
          response: {
            id: 0,
            value: 'No'
          },
          value: '¿Diabetes?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_8',
          response: {
            id: 0,
            value: 'No'
          },
          value: '¿Depresión o desórdenes mentales?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_10',
          response: {
            id: 0,
            value: 'No'
          },
          value: '¿Trastorno del riñón o del sistema urinario?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_11',
          response: {
            id: 0,
            value: 'No'
          },
          value: '¿Trastornos de los huesos, articulaciones o músculos?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_12',
          response: {
            id: 0,
            value: 'No'
          },
          value: '¿Trastorno del sistema inmunológico o del tejido conectivo?'
        },
        {
          id: 'Q_TREATMENT_HOSPITALIZED_9',
          response: {
            id: 0,
            value: 'No'
          },
          value: '¿Enfermedades de transmisión sexual?'
        }
      ],
      value:
        '¿Ha sido alguna vez diagnosticado, recibido tratamiento u hospitalizado por alguno de los siguientes?'
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
      value: '¿Tiene algún procedimiento o cirugía planeada?'
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
        '¿Ha tenido cirugías, resultados anormales o enfermedades no mencionados previamente?'
    },
    {
      id: 'Q_HEALTHCARE_PROVIDER',
      idQuestion: 'question25',
      nameQuestion: 'Q_HEALTHCARE_PROVIDER',
      numberQuestion: 25,
      response: [
        {
          id: 0,
          value: 'No'
        }
      ],
      subQuestions: null,
      value:
        '¿Tiene algún médico de atención primaria y/o proveedor de atención médica que lo haya tratado?'
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
      value: '¿Ha sido admitido en el hospital en los últimos 24 meses?'
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
      value: '¿En los últimos 14 días, ha tenido alguno de los siguientes?'
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
      value:
        '¿Ha tenido un resultado positivo en la prueba de COVID-19 / SARS-CoV2?'
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
        '¿Actualmente está esperando los resultados de una prueba o necesita hacerse la prueba de COVID-19 / SARS-CoV2?'
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
        '¿En los últimos 14 días, ha estado en contacto con alguien diagnosticado con COVID-19 / SARS-CoV2 o ha estado en cuarentena?'
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
        '¿En los últimos 14 días ha viajado o ha estado fuera de su ciudad de residencia permanente?'
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
      value: '¿Toma alguna medicación?'
    }
  ],
  selectedPlan: {
    description: '',
    frequency: {
      id: 'QUARTERLY',
      label: 'quarterly'
    },
    id: 1,
    rate: '138.97',
    term: {
      id: 'T10',
      label: '10 años',
      years: 10
    }
  },
  status: {
    id: 'completed',
    value: 'Completed'
  },
  user: {
    email: 'astest4@gmail.com',
    phone: null,
    uid: 'vaLUoHCnigTfkWtosvY8U2RrVdA3'
  }
};
export { applicationExample };
