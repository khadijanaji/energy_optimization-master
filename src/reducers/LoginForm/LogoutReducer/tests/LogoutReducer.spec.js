/* globals describe it expect*/


import LogoutReducer from "../LogoutReducer";
import {LoginFormStoreRecordFactory} from "../../../../storeTypes/LoginForm";
import {logoutActionCreator} from "../../../../actions/loginActions";


const fakeState = LoginFormStoreRecordFactory();
const logoutAction = logoutActionCreator();


describe("Reducer", () => {
  describe("LoginForm", () => {
    describe("LogoutReducer Reducer", () => {
      it("With correct state: Should update state correctly", () => {
        const expected = LoginFormStoreRecordFactory().
          set("status", "Success").
          setIn([
            "infoUser",
            "email"
          ], "").
          setIn([
            "infoUser",
            "name"
          ], "").
          setIn([
            "infoUser",
            "token"
          ], "");
        const actual = LogoutReducer(fakeState, logoutAction);
        expect(actual).toEqual(expected);
      });
    });
  });
});
