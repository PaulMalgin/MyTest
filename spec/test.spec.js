/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { sum } = require('../num1/operations');

describe('My operations testing', () => {
  describe('Simple operations', () => {
    test('sum', () => {
      expect(sum(3, 2)).toEqual(5);
    });
  });
});

describe('Math object testing', () => {
  let someVariable;

  beforeEach(() => {
    someVariable = 'initial value needed for each test';
  });

  describe('Math constants', () => {
    test('PI', () => {
      expect(Math.PI).toBeGreaterThan(3.14);
      expect(Math.PI).toBeLessThan(3.15);
    });
    test('E', () => {
      expect(Math.E).toBeCloseTo(2.718, 2);
    });
  });

  describe('Math methods', () => {
    test('pow(возведение в степень)', () => {
      expect(3 ** 2).toEqual(9);
    });
  });
});
