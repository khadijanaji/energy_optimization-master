/* globals describe it expect */

import {formatDate} from "./date-helpers";

describe("formatDate", () => {
  it("should return the date with format YYYY-MM-DD", () => {
    expect(formatDate(new Date("August 19, 2018 23:50:30"))).toEqual("2018-08-19");
    expect(formatDate(new Date("January 3, 2001 00:15:30"))).toEqual("2001-01-03");
    expect(formatDate(new Date("December 31, 1999 12:15:30"))).toEqual("1999-12-31");
  });
});
