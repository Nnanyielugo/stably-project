import { findHighestPrime } from './worker';

test('that algorithm returns highest prime numbber before an even number', () => {
  const result = findHighestPrime(10);
  expect(result).toEqual(7);
});

test('that algorithm returns highest prime numbber before an odd number', () => {
  const result = findHighestPrime(55);
  expect(result).toEqual(53);
});

test('that algorithm works for very large numbers (>= 1 billion) ', () => {
  const result = findHighestPrime(1e9);
  expect(result).toEqual(999999937); // takes <= 23 seconds
});
