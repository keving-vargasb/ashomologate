import {
  adminsegAgents,
  adminsegbeneficiaryTypes,
  adminsegCountries,
  adminsegFrequencies,
  adminsegGenders,
  adminsegHeightUnits,
  adminsegIdentityTypes,
  adminsegPersonTypes,
  adminsegProducts,
  adminsegRelationships,
  adminsegWeightUnits,
  homolgationQuestions
} from './data';
import { Entities } from './interfaces';

export class Adminseg {
  private _application: any;

  constructor(application: any) {
    this._application = application;
  }

  get application(): any {
    return this._application;
  }

  get homologationObject(): any {
    const names = this.separateFullname(this.application.personalInfo.fullName);

    return {
      person: {
        first_name: names.first_name,
        last_name: names.last_name,
        gender: this.findAdminsegItem(
          Entities.gender,
          this.application.personalInfo.gender.id,
          adminsegGenders
        ).value,
        height_unit: this.findAdminsegItem(
          Entities.heightUnit,
          this.application.personalInfo.measures.height.measurementUnit,
          adminsegHeightUnits
        ).value,
        height: this.application.personalInfo.measures.height.value,
        weight_unit: this.findAdminsegItem(
          Entities.weightUnit,
          this.application.personalInfo.measures.weight.measurementUnit,
          adminsegWeightUnits
        ).value,
        weight: this.application.personalInfo.measures.weight.value,
        addresses: [
          {
            country: this.findAdminsegCountry(
              this.application.personalInfo.location.country.id
            ).value,
            complete_address:
              this.application.personalInfo.address1 +
              ' ' +
              this.application.personalInfo.address2
          }
        ],
        birthday: this.application.personalInfo.birthdayDate, //TODO posible formato
        is_smoker: this.getAppQuestion('Q_SMOKE').response[0].id,
        emails: [
          {
            value: this.application.user.email
          }
        ],
        phones: [
          {
            type: 1,
            number: this.application.user.phone
          }
        ],
        identifications: [
          {
            type: this.findAdminsegItem(
              Entities.identityType,
              this.application.personalInfo.indentification.type.id,
              adminsegIdentityTypes
            ).value,
            number: this.application.personalInfo.indentification.number
          }
        ]
      },
      accept_condition_address: true,
      beneficiaries: this.adminsegBeneficiaries,
      owner_same_insured: this.application.ownerIsTheInsured,
      owner: this.application.ownerIsTheInsured ? this.adminsegOwner : null,
      accept_terms: true,
      date_accept_terms: this.application.legal.acceptTermsDate, //TODO posible formato
      recurring_payment: true,
      quotation: {
        uuid: this.application.uuid,
        agent: this.findAdminsegAgent(this.application.agent.code).value,
        product: this.findAdminsegItem(
          Entities.product,
          this.application.product.id,
          adminsegProducts
        ).value,
        insured_value: this.application.insuredValue,
        years: this.application.selectedPlan.term.years,
        frequency: this.findAdminsegItem(
          Entities.frequency,
          this.application.selectedPlan.frequency.id,
          adminsegFrequencies
        ).value
      },
      payment: {
        transaction_id: this.application.payment.subscriptionId,
        customer_profile_id: this.application.payment.profile.customerProfileId
      },
      answers: this.adminsegQuestions
    };
  }

  private findAdminsegItem(
    searchEntity: Entities,
    appID: number | string,
    homologationData: any
  ) {
    const findedItem = homologationData.find(
      (item: any) => item.appID === appID
    );

    if (!findedItem) throw new Error(`${searchEntity}_not_found`);
    return findedItem;
  }

  private findAdminsegCountry(appID: string) {
    const findedCountry = adminsegCountries.find(
      country => country.code === appID
    );
    if (!findedCountry) throw new Error('country_not_found');
    return findedCountry;
  }

  private findAdminsegAgent(agentCode: string) {
    const findedAgent = adminsegAgents.find(agent => agent.code === agentCode);
    if (!findedAgent) throw new Error('agent_not_found');
    return findedAgent;
  }

  private getAppQuestion(questionID: string) {
    const findedQuestion = this.application.questions.find(
      question => question.id === questionID
    );
    if (!findedQuestion) throw new Error('question_not_found');
    return findedQuestion;
  }

  private get adminsegBeneficiaries(): any {
    return this.application.beneficiaries.map(beneficiary => {
      const personType = this.findAdminsegItem(
        Entities.personType,
        beneficiary.personType.id,
        adminsegPersonTypes
      ).value;

      return {
        person_type: personType,
        legal_person: {
          name:
            personType === 'lp'
              ? `${beneficiary.firstName} ${beneficiary.last_name}`
              : null
        },
        real_person: {
          first_name: personType === 'rp' ? beneficiary.firstName : null,
          last_name: personType === 'rp' ? beneficiary.lastName : null,
          birthday: personType === 'rp' ? beneficiary.birthdayDate : null //TODO Posible formato
        },
        type: this.findAdminsegItem(
          Entities.beneficiaryType,
          beneficiary.type.id,
          adminsegbeneficiaryTypes
        ).value,
        category: this.findAdminsegItem(
          Entities.relationship,
          beneficiary.relationship.id,
          adminsegRelationships
        ).value,
        percentage: beneficiary.percent,
        reason: null,
        details: null
      };
    });
  }

  private get adminsegOwner(): any {
    const owner = this.application.owner;

    return {
      name: owner.fullName,
      relationship: this.findAdminsegItem(
        Entities.relationship,
        owner.relationship.id,
        adminsegRelationships
      ).value,
      identity: [
        {
          type: this.findAdminsegItem(
            Entities.identityType,
            owner.indentification.type.id,
            adminsegIdentityTypes
          ).value,
          number: owner.indentification.number
        }
      ],
      co_owner: 'jointOwner',
      address: owner.address,
      country: this.findAdminsegCountry(owner.country.id).value,
      state: null, //TODO
      city: null //TODO
    };
  }

  private get adminsegQuestions(): any {
    const questions = this.organizeQuestions();
    //console.log({ questions });
    const questionsFiltered = questions.filter(
      question => question.id != 'Q_SMOKE' && question.id != 'Q_GENDER'
    );

    let homologation = [];

    for (let question of questionsFiltered) {
      const questionHomologateResult = this.homologateQuestion(question);
      const newArray = homologation.concat(questionHomologateResult);
      homologation = newArray;
    }

    return homologation.filter(question => question !== undefined);
  }

  private organizeQuestions(): any {
    let questions = [];

    for (let question of this.application.questions) {
      if (question.subQuestion) {
        for (let subQuestion of question.subQuestion) {
          questions.push(subQuestion);
        }
        continue;
      }

      questions.push(question);
    }

    return questions;
  }

  private homologateQuestion(appQuestion): any {
    const homologation = homolgationQuestions[appQuestion.id];
    if (!homologation) return null;

    let result = [];

    for (let i = 0; i < homologation.questions.length; i++) {
      const homologationQuestionObject = homologation.questions[i];

      const homologationQuestionResult = this.manageSingleQuestion(
        homologationQuestionObject,
        appQuestion
      );

      if (Array.isArray(homologationQuestionResult)) {
        homologationQuestionResult.map(item => result.push(item));
        continue;
      }

      result.push(homologationQuestionResult);
    }

    //console.log(appQuestion.id, result);
    return result;
  }

  private manageSingleQuestion(homologationQuestionObject, appQuestion) {
    const response = appQuestion.response;
    switch (homologationQuestionObject.type) {
      case 'radio':
        return {
          question: homologationQuestionObject.id,
          choice: homologationQuestionObject.options[response[0].id]
        };
      case 'select':
        return {
          question: homologationQuestionObject.id,
          choice: homologationQuestionObject.options[response[0].id]
        };
      case 'bool':
        return {
          question: homologationQuestionObject.id,
          answer_bool: response[0].id == 1 ? true : false
        };
      case 'text':
        return {
          question: homologationQuestionObject.id,
          answer_text: response[0].value
        };
      case 'age':
        return {
          question: homologationQuestionObject.id,
          answer_age: parseInt(response[0].value)
        };
      case 'checkbox':
        return {
          question: homologationQuestionObject.id,
          checkbox: response.map(answer => answer.id)
        };
      case 'insurances':
        if (!this.application.insurances.acquired) return;
        const insurances = this.application.insurances.acquired.map(
          insurance => ({
            company_name: insurance.companyName,
            member_id: insurance.memberId,
            effective_date: insurance.effectiveDate //TODO posible formato
          })
        );
        return {
          question: homologationQuestionObject.id,
          insurances
        };
      case 'doctor':
        if (!this.application.doctors) return;
        const doctors = this.application.doctors.map(doctor => ({
          name: doctor.name,
          address: doctor.email,
          phone: doctor.phone,
          condition: doctor.conditionTreated
        }));
        return {
          question: homologationQuestionObject.id,
          doctors
        };
      case 'medicine':
        if (!this.application.medicines) return;
        const medicines = this.application.medicines.map(medicine => ({
          name: medicine.name,
          dosage: medicine.dosage,
          condition: medicine.condition
        }));
        return {
          question: homologationQuestionObject.id,
          medicines
        };
      case 'insurance_denied_type':
        return {
          question: homologationQuestionObject.id,
          choice: this.application.insurances.denied[0].type.id
        };
      case 'insurance_denied_text':
        return {
          question: homologationQuestionObject.id,
          answer_text: this.application.insurances.denied[0].details
        };
      case 'covid-date':
        if (!this.application.covid.tests) return;
        return {
          question: homologationQuestionObject.id,
          date: this.application.covid.tests[0].testDate //TODO posible formato
        };
      case 'covid-bool':
        return {
          question: homologationQuestionObject.id,
          answer_bool: this.application.covid.currentlySymptoms ? true : false
        };
      case 'traveled_text':
        return {
          question: homologationQuestionObject.id,
          answer_text: appQuestion.details ? appQuestion.details : null
        };
    }
  }

  private separateFullname(fullname: string) {
    const names = fullname.split(' ');
    const namesClean = names.filter(name => {
      if (name) return name;
    });

    switch (namesClean.length) {
      case 1:
        return {
          first_name: namesClean[0],
          last_name: null
        };
      case 2:
        return {
          first_name: namesClean[0],
          last_name: namesClean[1]
        };
      case 3:
        return {
          first_name: namesClean[0],
          last_name: `${namesClean[1]} ${namesClean[2]}`
        };
      default:
        return {
          first_name: `${namesClean[0]} ${namesClean[1]}`,
          last_name: `${namesClean[2]} ${namesClean[3]}`
        };
    }
  }
}
