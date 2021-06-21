import {
  adminsegAgents,
  adminsegCountries,
  adminsegGenders,
  adminsegHeightUnits,
  adminsegIdentityTypes,
  adminsegPersonTypes,
  adminsegRelationships,
  adminsegWeightUnits
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
    return {
      person: {
        first_name: '', //TODO incomplete
        last_name: '', //TODO incomplete
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
        is_smoker: this.getQuestion('Q_SMOKE').response[0].id,
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
      owner: this.application.ownerIsTheInsured ? this.adminsegOwner : null
    };
  }

  findAdminsegItem(
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

  findAdminsegCountry(appID: string) {
    const findedCountry = adminsegCountries.find(
      country => country.code === appID
    );
    if (!findedCountry) throw new Error('country_not_found');
    return findedCountry;
  }

  findAdminsegAgent(agentCode: string) {
    const findedAgent = adminsegAgents.find(agent => agent.code === agentCode);
    if (!findedAgent) throw new Error('agent_not_found');
    return findedAgent;
  }

  getQuestion(questionID: string) {
    const findedQuestion = this.application.questions.find(
      question => question.id === questionID
    );
    if (!findedQuestion) throw new Error('question_not_found');
    return findedQuestion;
  }

  get adminsegBeneficiaries(): any {
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
        type: null, //TODO No tenemos el valor satelite
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

  get adminsegOwner(): any {
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
      co_owner: null, //TODO no sé a que hace referencia "jointOwner"
      address: owner.address,
      country: this.findAdminsegCountry(owner.country.id).value,
      state: null, //TODO
      city: null //TODO
    };
  }
}
