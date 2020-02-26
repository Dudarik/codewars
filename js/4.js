/*
Create an addition function that does not utilize the + or - operators.

Anti-cheat tests
You may not use any of these symbols: +-[].'"`

Moreover, Math, Array, eval, new Function, with and such have been disabled.
 */

function add (x, y) {
  if (y == 0) return x
  let sum = x ^ y
  let z = (x & y) << 1
  return add(sum, z)
}
//function add (x, y) { return y === 0 ? x : add(x ^ y, (x & y) << 1); }
console.log(add(2,3))
