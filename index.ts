import { Adminseg } from './AdminsegClass';
import { homolgationQuestions } from './data';
import { applicationExample } from './input';

const obj = new Adminseg(applicationExample);

const homologationObject = obj.homologationObject;
console.log(homologationObject);

console.log(homolgationQuestions.Q_ALCOHOL_CONSUMPTION.questions[0].id);
console.log(homolgationQuestions.Q_ALCOHOL_CONSUMPTION.questions[0].type);
console.log(
  homolgationQuestions.Q_ALCOHOL_CONSUMPTION.questions[0].options['1']
);
