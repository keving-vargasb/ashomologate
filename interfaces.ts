enum Entities {
  gender = 'gender',
  product = 'product',
  frequency = 'frequency',
  relationship = 'relationship',
  phoneType = 'phone_type',
  identityType = 'identity_type',
  personType = 'person_type',
  heightUnit = 'height_unit',
  weightUnit = 'weight_unit',
  beneficiaryType = 'beneficiary_type'
}

interface AdminsegGender {
  value: number;
  name: string;
  appID: number;
}

interface AdminsegProduct {
  value: number;
  name: string;
  appID: string;
  plans: {
    value: number;
    name: string;
    coverage_years: number;
  }[];
}

interface AdminsegFrequency {
  value: number;
  name: string;
  payouts: number;
  appID: string;
}

interface AdminsegRelationship {
  value: number;
  name: string;
  appID: number;
}

interface AdminsegPhoneType {
  value: number;
  name: string;
  appID: number;
}

interface AdminsegIdentityType {
  value: number;
  name: string;
  appID: number;
}

interface AdminsegPersonType {
  value: string;
  name: string;
  appID: number;
}

interface AdminsegHeightUnit {
  value: string;
  name: string;
  appID: number;
}

interface AdminsegWeightUnit {
  value: string;
  name: string;
  appID: number;
}

interface AdminsegAgent {
  value: number;
  full_name: string;
  code: string;
}

interface AdminsegCountry {
  value: number;
  name: string;
  code: string;
}

interface AdminsegBeneficiaryType {
  value: number;
  name: string;
  appID: number;
}

export {
  Entities,
  AdminsegGender,
  AdminsegProduct,
  AdminsegFrequency,
  AdminsegRelationship,
  AdminsegPhoneType,
  AdminsegIdentityType,
  AdminsegPersonType,
  AdminsegHeightUnit,
  AdminsegWeightUnit,
  AdminsegAgent,
  AdminsegCountry,
  AdminsegBeneficiaryType
};
