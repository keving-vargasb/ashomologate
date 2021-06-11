import { adminsegCountries } from './data';
import { AdminsegCountry } from './interfaces';

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
    if (!findedCountry) throw 'country_not_found';
    return findedCountry;
  }
}
