// see optimization details in readME
export default function findHighestPrime(n: number): number {
  // optimization 1:
  const primes: Int8Array = new Int8Array(n);
  let highestPrime = 0;

  primes[0] = 1;
  primes[1] = 1;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    // optimization 2
    if (primes[i] === 0) {
      // optimization 3
      let multiplesOfI = i * i;
      // optimization 4
      for (let j = multiplesOfI; j <= n; j += i) {
        primes[j] = 1;
      }
    }
  }

  for (let i = 2; i <= primes.length; i++) {
    if (primes[i] === 0) {
      if (i > highestPrime) {
        highestPrime = i;
      }
    }
  }

  return highestPrime;
}
