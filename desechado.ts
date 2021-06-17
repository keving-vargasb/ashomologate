
  homologateGender(vtioID: number): AdminsegGender {
    const findedGender = adminsegGenders.find(
      gender => gender.vtioID === vtioID
    );
    if (!findedGender) throw new Error('gender_not_found');
    return findedGender;
  }

  homologateProduct(vtioID: string): AdminsegProduct {
    const findedProduct = adminsegProducts.find(
      product => product.vtioID === vtioID
    );
    if (!findedProduct) throw new Error('product_not_found');
    return findedProduct;
  }

  homologateFrequency(vtioID: string): AdminsegFrequency {
    const findedFrequency = adminsegFrequencies.find(
      frequency => frequency.vtioID === vtioID
    );
    if (!findedFrequency) throw new Error('frequency_not_found');
    return findedFrequency;
  }

  homologateRelationship(vtioID: number): AdminsegRelationship {
    const findedRelationship = adminsegRelationships.find(
      relationship => relationship.vtioID === vtioID
    );
    if (!findedRelationship) throw new Error('relationship_not_found');
    return findedRelationship;
  }

  homologatePhoneType(vtioID: number): AdminsegPhoneType {
    const findedPhoneType = adminsegPhoneTypes.find(
      phoneType => phoneType.vtioID === vtioID
    );
    if (!findedPhoneType) throw new Error('phone_type_not_found');
    return findedPhoneType;
  }

  homologateIdentityType(vtioID: number): AdminsegIdentityType {
    const findedIdentityType = adminsegPhoneTypes.find(
      identityType => identityType.vtioID === vtioID
    );
    if (!findedIdentityType) throw new Error('identity_type_not_found');
    return findedIdentityType;
  }

  homologatePersonType(vtioID: number): AdminsegPersonType {
    const findedPersonType = adminsegPersonTypes.find(
      personType => personType.vtioID === vtioID
    );
    if (!findedPersonType) throw new Error('person_type_not_found');
    return findedPersonType;
  }

  homologateHeightUnit(vtioID: number): AdminsegHeightUnit {
    const findedHeightUnit = adminsegHeightUnits.find(
      heightUnit => heightUnit.vtioID === vtioID
    );
    if (!findedHeightUnit) throw new Error('height_unit_not_found');
    return findedHeightUnit;
  }

  homologateWeightUnit(vtioID: number): AdminsegHeightUnit {
    const findedHeightUnit = adminsegHeightUnits.find(
      heightUnit => heightUnit.vtioID === vtioID
    );
    if (!findedHeightUnit) throw new Error('weight_unit_not_found');
    return findedHeightUnit;
  }