// Objectives: calculate the nth fibonacci
// Data: n = 6
// Method 1: apply the formula f(n) = f(n-1) + f(n-2) recursively
// Method 2: apply the formula f(n) = f(n-1) + f(n-2) recursively but store already calculated ones in a hash table
// Method 3: store the last calculated two values and iterate until reaching the nth fibonacci

// Approach #1: O(2^n) time | O(n) Space
// function getNthFib(n) {
//   if (n === 2) return 1
//   if (n === 1) return 0
//   return getNthFib(n - 1) + getNthFib(n - 2)
// }

// Approach #2: O(n) time | O(n) space
// function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
//   if (!memoize[n]) {
//     memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)
//   }
//   return memoize
// }

// Approach #3: O(n) time | O(1) space
function getNthFib(n) {
  let lastTwo = [0, 1]
  let counter = 3
  let nextFeb;
  while (counter <= n) {
    nextFeb = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFeb
    counter++
  }
  return n > 1 ? lastTwo[1] : lastTwo[0]
}

// Test
console.log(getNthFib(7)) // 8