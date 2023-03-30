/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let tmpA = BigInt("0b" + a);
  let tmpB = BigInt("0b" + b);
  return (tmpA + tmpB).toString(2);
};
