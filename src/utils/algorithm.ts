export default function findHighestPrime(n: number): number {
  const primes: boolean[] = [];
  let highestPrime = 0;

  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; i * j <= n; j++) {
      const multipleOfI = i * j;
      primes[multipleOfI] = false;
    }
  }

  for (let i = 0; i <= primes.length; i++) {
    if (primes[i]) {
      if (i > highestPrime) {
        highestPrime = i;
      }
    }
  }

  return highestPrime;
}
