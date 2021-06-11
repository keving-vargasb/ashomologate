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

  homologateCountry(iso3Code: string): AdminsegCountry {
    const findedCountry = adminsegCountries.find(
      country => country.code === iso3Code
    );
    if (!findedCountry) throw new Error('country_not_found');
    return findedCountry;
  }

  homologateGender(id: number): AdminsegGender {
    const findedGender = adminsegGenders.find(gender => gender.vtioID === id);
    if (!findedGender) throw new Error('gender_not_found');
    return findedGender;
  }
}
