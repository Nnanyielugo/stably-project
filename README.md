
## Code for the Stably Short Project
#### This is a web application that takes in a number and returns to the user the highest prime number lower than the input number.

You can view the application [here](https://nnanyielugo.github.io/stably-project/)

This solution started by using the Sieve of Eratosthenes, moved to the segmented SoE to solve the space complexity problem regular SoE throws up, then changed to using a regular `i, j` loop technique, starting from the input number `n`, looping down, and making a few optimizations to perform much faster than SoE and SSoE for very large numbers.

The code for SOE and SSOE are commented out instead of deleted in [`worker.ts`](https://github.com/Nnanyielugo/stably-project/blob/main/src/worker.ts), for reference sake.

Algorithms used at different points and the optimizations made are described in detail below.

#### *The algorithm source file is located at [`worker.ts`](https://github.com/Nnanyielugo/stably-project/blob/main/src/worker.ts)*

### Instructions for use:
- clone or download repository
- `cd` into the project directory and install project dependencies `npm install`
- start the development server `npm start`
- view on `http://localhost:3000

#### Testing
Run `npm test`

#### Deployment
- create an empty repository on github
- replace the github url on the homepage key in `package.json` with your `username dot github dot io`.
- run `npm run deploy`
- navigate to the replaced url on your `package.json` and view the application there.

### Optimizations:
#### Optimization 1: Initialize `primes` as an Int8 typed array using the Sieve of Eratosthenes algorithm.
Because Int8 arrays are initialized and filled up to the number `n` passed in, we're using zero to mark as true instead, and flip to 1, to mark as false.

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

### Optimization 7: Use regular `i, j` loops and make some optimizations
I wondered how a reguler double loop would solve this problem, except that the outer loop would start from `n` and loop down, while checking for primes in the inner loop. Using estimated measurements, it performed slightly better than the segmented seive for very large numbers `1e9`. Then I used a technique similar to the SoE outer loop for the inner loop of this function, where the loop runs until `i` is greater than or equal to the square root of `x`. The speed improvement was atronomical, with inputs up to `9e15` resolving in a few seconds where previously `1e11` took approx 20 minutes to run.

*Limitations:* This program works well for numbers up to 9 quadrillion, but fails for numbers above that (enters an infinite loop) because numerical operations on numbers 10 quadrillion and above are pretty inconsistent.


*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*
