/* globals describe it expect*/


import LoginReducer from "../LoginReducer";
import {LoginFormStoreRecordFactory} from "../../../../storeTypes/LoginForm";


const fakeState = LoginFormStoreRecordFactory();


describe("Reducer", () => {
  describe("LoginForm", () => {
    describe("LoginReducer Reducer", () => {
      it("With correct state: Should update state correctly", () => {
        const expected = LoginFormStoreRecordFactory().
          set("status", "Loading").
          set("errorMsg", "");
        const actual = LoginReducer(fakeState);
        expect(actual).toEqual(expected);
      });
    });
  });
});
