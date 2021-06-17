import {
  adminsegCountries,
  adminsegFrequencies,
  adminsegGenders,
  adminsegProducts
} from './data';
import {
  AdminsegCountry,
  AdminsegFrequency,
  AdminsegGender,
  AdminsegProduct
} from './interfaces';

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
        first_name: '',
        last_name: '',
        gender: this.homologateGender().value
      }
    };
  }

  homologateCountry(): AdminsegCountry {
    const findedCountry = adminsegCountries.find(
      country =>
        country.code === this.application.personalInfo.location.country.id
    );
    if (!findedCountry) throw new Error('country_not_found');
    return findedCountry;
  }

  homologateGender(): AdminsegGender {
    const findedGender = adminsegGenders.find(
      gender => gender.vtioID === this.application.personalInfo.gender.id
    );
    if (!findedGender) throw new Error('gender_not_found');
    return findedGender;
  }

  homologateProduct(): AdminsegProduct {
    const findedProduct = adminsegProducts.find(
      product => product.vtioID === this.application.product.id
    );
    if (!findedProduct) throw new Error('product_not_found');
    return findedProduct;
  }

  homologateFrequency(): AdminsegFrequency {
    const findedFrequency = adminsegFrequencies.find(
      frequency =>
        frequency.vtioID === this.application.selectedPlan.frequency.id
    );
    if (!findedFrequency) throw new Error('frequency_not_found');
    return findedFrequency;
  }
}
