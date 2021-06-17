import { adminsegGenders } from './data';
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
        first_name: '',
        last_name: '',
        gender: this.findItem(
          Entities.gender,
          this.application.personalInfo.gender.id,
          adminsegGenders
        ).value
      }
    };
  }

  findItem(entity: Entities, appID: number | string, homologationData: any) {
    const findedItem = homologationData.find(
      (item: any) => item.appID === appID
    );

    if (!findedItem) throw new Error(`${entity}_not_found`);
    return findedItem;
  }
}
