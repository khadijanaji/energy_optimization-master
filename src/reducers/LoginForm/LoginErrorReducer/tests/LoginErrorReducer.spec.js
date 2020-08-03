/* globals describe it expect*/


import LoginErrorReducer from "../LoginErrorReducer";
import {LoginFormStoreRecordFactory} from "../../../../storeTypes/LoginForm";
import {loginActionErrorCreator} from "../../../../actions/loginActions";


const errMsg = "Error";
const fakeState = LoginFormStoreRecordFactory();
const loginErrorAction = loginActionErrorCreator(errMsg);


describe("Reducer", () => {
  describe("LoginForm", () => {
    describe("LoginErrorReducer Reducer", () => {
      it("With correct state: Should update state correctly", () => {
        const expected = LoginFormStoreRecordFactory().
          set("status", "Error").
          set("errorMsg", errMsg);
        const actual = LoginErrorReducer(fakeState, loginErrorAction);
        expect(actual).toEqual(expected);
      });
    });
  });
});
