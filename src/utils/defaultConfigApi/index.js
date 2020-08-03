/* eslint-disable no-extend-native */
/* eslint-disable func-names */

const oldNumberToString = Number.prototype.toString;
const oldNumberToFixed = Number.prototype.toFixed;
export default {
  overrideNumberToStringAndToFixed () {
    const formatter = new Intl.NumberFormat("fr-FR");
    Number.prototype.toString = function () {
      return formatter.format(this);
    };

    Number.prototype.toFixed = function (nbChiffres) {
      const value = oldNumberToFixed.call(this, nbChiffres);
      return formatter.format(value);
    };
    return this;
  },
  restoreNumberToStringAndToFixed () {
    Number.prototype.toString = oldNumberToString;
    Number.prototype.toFixed = oldNumberToFixed;
    return this;
  }
};
