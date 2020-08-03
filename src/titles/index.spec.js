/* globals describe it expect */

import {getCategoryObject} from "./";

describe("Helper", () => {
  describe("Titles resolver", () => {
    it("Get pap.production category object", () => {
      expect(getCategoryObject("pap", "production", "")).toMatchSnapshot();
    });
  });
});
