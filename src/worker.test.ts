import { findHighestPrime } from './worker';

test('that algorithm returns highest prime numbber before an even number', (): void => {
  const result = findHighestPrime(10);
  expect(result).toEqual(7);
});

test('that algorithm returns highest prime numbber before an odd number', (): void => {
  const result = findHighestPrime(55);
  expect(result).toEqual(53);
});

test('that algorithm works for very large numbers (>= 1 billion) ', (): void => {
  const result = findHighestPrime(1e9);
  expect(result).toEqual(999999937); // takes <= 23 seconds
});

test('that algorithm returns an error for numbers less than 2', (): void => {
  expect(() => findHighestPrime(0)).toThrowError(
    'Input number must be greater than 2'
  );
});
