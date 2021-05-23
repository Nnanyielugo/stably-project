
## Code for the Stably Short Project
#### This is a web application that takes in a number and returns to the user the highest prime number lower than the input number.

You can view the application [here](https://nnanyielugo.github.io/stably-project/)

This problem was solved using the segmented Sieve of Eratosthenes because the SoE algorithm is very performant in dealing with large numbers because of its optimization which iteirates over the multiples of each prime starting from the square of the prime. However, the regular sieve uses up a lot of memory for large nnumbers (despite the optimizzationfrom using a Typed Array for storing the initial numbers, running out of space at numbers over `2e9` which is the limit typed arrays can be initialized with. Previously stopped at `1e8` when using either a `for` loop or `new Array(num).fill(bool)` so the algoritm was switched to using a segmented sieve which solves the space complexity problem. Currently, this algorithm finds the highest prime number lower than the input number for in input of `1e11` at ~20 minutes. I tried to run `1e12`, but it was taking too long so I aborted the program.

The optimizations made are described in detail below.

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
#### Optimization 1: Initialize `primes` as an Int8 typed array.
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

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*
