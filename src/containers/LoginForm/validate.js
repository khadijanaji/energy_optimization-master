// @flow

const validate = (values: any) => {
  const errors = {};
  if (values && !values.email) {
    errors.email = "Ce champs est obligatoire!";
  }
  if (values && !values.password) {
    errors.password = "Ce champs est obligatoire!";
  }
  return errors;
};

export default validate;
