enum FieldValidationStatus {
  SomeFieldIsEmpty,
  AllFieldsFilled
}

const validateCredentials = (credObjFromStorage: { [key: string]: unknown }): FieldValidationStatus => {
  if (
    credObjFromStorage.username !== '' &&
    credObjFromStorage.password !== '' &&
    credObjFromStorage.q1 !== 'Your ERP question 1' &&
    credObjFromStorage.q2 !== 'Your ERP question 2' &&
    credObjFromStorage.q3 !== 'Your ERP question 3' &&
    credObjFromStorage.a1 !== '' &&
    credObjFromStorage.a2 !== '' &&
    credObjFromStorage.a3 !== ''
  ) {
    return FieldValidationStatus.AllFieldsFilled
  } else {
    return FieldValidationStatus.SomeFieldIsEmpty
  }
}

export { FieldValidationStatus }
export default validateCredentials
