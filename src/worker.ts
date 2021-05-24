// see optimization details in readME
function simpleSieve(n: number): number[] {
  // optimization 1:
  const primes = new Int8Array(n);
  const results: number[] = [];

  primes[0] = 1;
  primes[1] = 1;

  for (let i = 0; i <= Math.sqrt(n); i++) {
    // optimization 2
    if (primes[i] === 0) {
      // optimization 3
      const multiplesOfI = i * i;
      // optimization 4
      for (let j = multiplesOfI; j <= n; j += i) {
        primes[j] = 1;
      }
    }
  }

  for (let i = 0; i <= primes.length; i++) {
    if (primes[i] === 0) {
      results.push(i);
    }
  }

  return results;
}

// optimization 6
export function findHighestPrime(n: number): number {
  if (n < 2) {
    throw new Error('Input number must be greater than 2');
  }
  const primes = [];
  let highestPrime = 0;

  // add 1 to range so that very small numbers <= 10 would play nicely
  // for the first prime
  const range = Math.floor(Math.sqrt(n)) + 1;

  // compute primes up to sqrt of n
  primes.push(...simpleSieve(range));

  let lowerLimit = range;
  let upperLimit = range * 2;

  while (lowerLimit < n) {
    // keep upperLimit one number lower than n
    if (upperLimit >= n) {
      upperLimit = n - 1;
    }

    const currentNumbers = new Int8Array(range);

    for (let i = 0; i < primes.length; i++) {
      const prime = primes[i];

      // find minimum multiple of prime (aka, divisible by prime) in current range
      let minMulOfPrime = Math.floor(lowerLimit / prime) * prime;

      if (minMulOfPrime < lowerLimit) {
        // keep minimum multiple in current range by shifting to the next multiple is below range
        minMulOfPrime += prime;
      }

      // mark multiples of prime in range
      for (let j = minMulOfPrime; j <= upperLimit; j += prime) {
        const indexInRange = j - lowerLimit;
        currentNumbers[indexInRange] = 1;
      }
    }

    // loop through primes in range and update highest prime
    for (let i = lowerLimit; i <= upperLimit; i++) {
      // since currentNumbers is a slice of length low - high
      // get number index in range by subtracting index from low
      const numIndexInRange = i - lowerLimit;
      if (currentNumbers[numIndexInRange] === 0) {
        highestPrime = i;
      }
    }

    // update low and high for next segment
    lowerLimit += range;
    upperLimit += range;
  }

  return highestPrime;
}
