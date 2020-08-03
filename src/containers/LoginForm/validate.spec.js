/* globals describe it expect */
import validate from "./validate.js";

describe("LoginForm validate", () => {
  let values = {};
  beforeEach(() => {
    values = {
      "email": "user@mail.com",
      "password": "password"
    };
  });

  it("should return empty errors object if email and password provided", () => {
    const errors = validate(values);
    expect(errors).toEqual({});
  });

  it("should return email validation errors if email not provided", () => {
    values.email = undefined;
    const errors = validate(values);
    expect(errors.email).not.toEqual(undefined);
  });

  it("should return email validation errors if email is empty string", () => {
    values.email = "";
    const errors = validate(values);
    expect(errors.email).not.toEqual(undefined);
  });

  it("should return password validation errors if password not provided", () => {
    values.password = undefined;
    const errors = validate(values);
    expect(errors.password).not.toEqual(undefined);
  });

  it("should return password validation errors if password is empty string", () => {
    values.password = "";
    const errors = validate(values);
    expect(errors.password).not.toEqual(undefined);
  });
});
