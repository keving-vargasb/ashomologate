import { adminsegCountries, adminsegGenders } from './data';
import { AdminsegCountry, AdminsegGender } from './interfaces';

export class Adminseg {
  private _application: any;

  constructor(application: any) {
    this._application = application;
  }

  get application(): any {
    return this._application;
  }

  get homologationObject(): any {
    return 50;
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
}
