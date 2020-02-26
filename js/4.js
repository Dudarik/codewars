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
//console.log(add(2,3))

function firstNonConsecutive (arr) {
  if (arr.length == 0) return null

  let start = arr[0]

  for (let i = 0; i < arr.length; i++ ) {
    console.log(start, +arr[i]);
    
    if (start !== arr[i]) return arr[i]

    start++
  }
  return null

  //firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1)) 
 /*function firstNonConsecutive (arr) {
  return (r=arr.find((x,i)=>i>0&&x!=arr[i-1]+1))===undefined?null:r
}*/
}

console.log( firstNonConsecutive([ -8, -7, -6, -5, -4, -3, -2, -1 ]) );


