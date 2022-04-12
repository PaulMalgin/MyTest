/* eslint-disable no-restricted-syntax */
function positiveSum(arr) {
  let sum = 0;
  for (const el of arr) {
    if (el > 0) {
      sum += el;
    }
  }
  return sum;
}

module.exports = { positiveSum };
