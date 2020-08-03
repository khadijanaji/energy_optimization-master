/* eslint-disable no-magic-numbers */
/* globals describe it expect */

import {findMinMax} from "../";

describe("Helper Functions", () => {
  describe("FindMinMax Helper", () => {
    it("With null array:  should return null ", () => {
      expect(findMinMax(null)).toBe(null);
    });

    it("With empty array:  should return [Number.MAX_VALUE, Number.MIN_VALUE] ", () => {
      expect(findMinMax([])).toEqual([
        Number.MAX_VALUE,
        Number.MIN_VALUE
      ]);
    });

    it("With an array of numbers:  should return [Min of the array, max of the array] ", () => {
      expect(findMinMax([
        1,
        2,
        3,
        4,
        5
      ])).toEqual([
        1,
        5
      ]);
    });
  });
});
