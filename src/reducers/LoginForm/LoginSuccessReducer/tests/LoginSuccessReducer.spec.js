/* globals describe it expect*/


import LoginSuccessReducer from "../LoginSuccessReducer";
import {LoginFormStoreRecordFactory} from "../../../../storeTypes/LoginForm";
import {loginActionSuccessCreator} from "../../../../actions/loginActions";


const fakeState = LoginFormStoreRecordFactory();
const fakeMail = "fakeMail@ocpgroup.ma";
const fakeName = "fakeName";
const fakeToken = "fakeToken";
const fakeRoles = [
  "role1",
  "role2"
];
const fakeFactories = [
  "factory1",
  "factory2"
];
const loginSuccessAction = loginActionSuccessCreator({
  "email": fakeMail,
  "name": fakeName,
  "token": fakeToken,
  "roles": fakeRoles,
  "factories": fakeFactories
});


describe("Reducer", () => {
  describe("LoginForm", () => {
    describe("LoginSuccessReducer Reducer", () => {
      it("With correct state: Should update state correctly", () => {
        const expected = LoginFormStoreRecordFactory().
          set("status", "Success").
          setIn([
            "infoUser",
            "email"
          ], fakeMail).
          setIn([
            "infoUser",
            "name"
          ], fakeName).
          setIn([
            "infoUser",
            "token"
          ], fakeToken).
          setIn([
            "infoUser",
            "roles"
          ], fakeRoles).
          setIn([
            "infoUser",
            "factories"
          ], fakeFactories);
        const actual = LoginSuccessReducer(fakeState, loginSuccessAction);
        expect(actual).toEqual(expected);
      });
    });
  });
});
