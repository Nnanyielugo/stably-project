
### This problem was solved using an optimised Sieve of Eratosthenes algorithm

### Optimizations:
#### Optimization 1: Initialize `primes` as an Int8 typed array.
Because Int8 arrays are initialized and filled upp to the number `n` passed in, we're using zero to mark as true instead, and flip to 1, to mark as false.

Performance benefits:
- increase input max number from 1e8 (100 million) to 2e9(2 billion).
- speed improvements as the first loop and its subsequent assignning booleans to indicies are eliminated. This is significant when working with very large numbers.

### Optimization 2: Check if index is flipped before going on to inner loop
Performance benefits:
- prevents looping through verified non-primes, since their multiples are also not primes. This is significant when working with very large numbers

### Optimization 3: Begin inner loop from multiple of index, instead of 2
This is important because we're only interested in numbers that are factors of index

Performance benefits:
- prevents looping through prime numbers, as they will not be flipped anyway.

### Optimization 4: Increment inner loop from by index, instead of 1
- also prevents looping through prime numbers, as they will not be flipped anyway.

### Optimization 5: Run Algorithm as a worker
This means large numbers that would take a noticeable time to process, would not 'freeze' the application.

### Optimization 6: Use segmented seive
While SoE performs pretty well on the time complexity scale, the compiler/interpreter runs out of space at around 1e8 (2e9 when optimised with typed arrays due to typed arrays unable to be initialized with > 2 billion items) and returns an error. To handle this, we seive for primes in segments.

#### steps:
- convert original SoE algorithm to return an array of primes instead of a single number
- init a `highestPrime` variable
- compute primes up to the square root of the input `n` using a simple sieve
- divide range `n` into different segments with seqment size equal to the square root of `n`
- process each segment at a time.
- initialize array to mark primes in current range
- loop through primes generated from simple seive
- find minimim multiple of prime in range where `range = low - high`
- mark multiples of prime in range
- loop through currentNumbers array and update `highestPrime` variable bases on set condition being met

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*
