
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


*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*
