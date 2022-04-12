/* eslint-disable no-undef */
const { positiveSum } = require('../num1/positiveSum');
const { opposite } = require('../num1/opposite');
const { removeChar } = require('../num1/removeChar');
const { repeatStr } = require('../num1/stringrepeat');

test('Return the sum of all of the positives ones.', () => {
  expect(positiveSum([1, 2, 3, 4, 5])).toEqual(15);
  expect(positiveSum([1, -2, 3, 4, 5])).toEqual(13);
  expect(positiveSum([])).toEqual(0);
  expect(positiveSum([-1, -2, -3, -4, -5])).toEqual(0);
  expect(positiveSum([-1, 2, 3, 4, -5])).toEqual(9);
});
test('Find its opposite', () => {
  expect(opposite(1)).toEqual(-1);
  expect(opposite(-14)).toEqual(14);
  expect(opposite(-34)).toEqual(34);
});

test('Create a function that removes the first and last characters of a string.', () => {
  expect(removeChar('eloquent')).toEqual('loquen');
  expect(removeChar('country')).toEqual('ountr');
  expect(removeChar('person')).toEqual('erso');
  expect(removeChar('place')).toEqual('lac');
  expect(removeChar('ooopsss')).toEqual('oopss');
});
test('Repeats the given string string exactly n times.', () => {
  expect(repeatStr(3, '*')).toEqual('***');
  expect(repeatStr(5, '#')).toEqual('#####');
  expect(repeatStr(2, 'ha ')).toEqual('ha ha ');
});
