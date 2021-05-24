import { findHighestPrime } from './worker';

test('that algorithm returns highest prime numbber before an even number', (): void => {
  const result = findHighestPrime(10);
  expect(result).toEqual(7);
});

test('that algorithm returns highest prime numbber before an odd number', (): void => {
  const result = findHighestPrime(55);
  expect(result).toEqual(53);
});

test('that algorithm works for very large numbers (>= 9 quadrillion) ', (): void => {
  const result = findHighestPrime(9e15);
  expect(result).toEqual(8999999999999971);
});

test('that algorithm returns an error for numbers less than 2', (): void => {
  expect(() => findHighestPrime(0)).toThrowError(
    'Input number must be greater than 2'
  );
});

test('that algorithm returns an error for numbbers 10 quadrillion and above', () => {
  expect(() => findHighestPrime(1e16)).toThrowError(
    'Input number should not exceed 10 quadrillion!'
  );
});
