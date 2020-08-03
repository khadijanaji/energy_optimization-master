// @flow

import type {List} from "immutable/dist/immutable";

export const findMinMax = (items: List<number>): Array<number> => items && items.reduce((acc, value) => ([
  Math.min(acc[0], value),
  Math.max(acc[1], value)
]), [
  Number.MAX_VALUE,
  Number.MIN_VALUE
]);

export const isNullOrUndefined = (elem: any): any => (elem === null) || (elem === undefined);
