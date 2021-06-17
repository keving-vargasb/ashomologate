interface AdminsegCountry {
  value: number;
  name: string;
  code: string;
}

interface AdminsegGender {
  value: number;
  name: string;
  vtioID: number;
}

interface AdminsegProduct {
  value: number;
  name: string;
  vtioID: string;
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
  vtioID: string;
}

interface AdminsegRelationship {
  value: number;
  name: string;
  vtioID: number;
}

interface AdminsegPhoneType {
  value: number;
  name: string;
  vtioID: number;
}

interface AdminsegIdentityType {
  value: number;
  name: string;
  vtioID: number;
}

interface AdminsegPersonType {
  value: string;
  name: string;
  vtioID: number;
}

interface AdminsegHeightUnit {
  value: string;
  name: string;
  vtioID: number;
}

interface AdminsegWeightUnit {
  value: string;
  name: string;
  vtioID: number;
}

export {
  AdminsegCountry,
  AdminsegGender,
  AdminsegProduct,
  AdminsegFrequency,
  AdminsegRelationship,
  AdminsegPhoneType,
  AdminsegIdentityType,
  AdminsegPersonType,
  AdminsegHeightUnit,
  AdminsegWeightUnit
};
