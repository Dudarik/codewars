/*
You have to create a function that takes a positive integer 
number and returns the next bigger number formed by the same 
digits:

12 ==> 21
513 ==> 531
2017 ==> 2071

If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1*/

function nextBigger(n) {

  let x = n.toString().split('')

  let p = -1;
  for (let i = x.length - 1; i > 0; i--) {
    if (+x[i] > +x[i - 1]) {
      p = i - 1
      break
    }
  }

  if (p == -1) return p

  let right = x.splice(p)

  let pv = right.splice(0, 1)[0];

  let mm = null,
    mmi = null

  for (let i = 0; i < right.length; i++) {
    if (right[i] > pv) {
      if (mm == null || right[i] < mm) {

        mm = right[i]
        mmi = i
      }
    }
  }

  if (mmi == null) return -1
  
  right.splice(mmi, 1)
  right.push(pv)
  right = right.sort();

  let ret = +x.concat([mm]).concat(right).join('');

  if (ret < n) return -1
  return ret;
/*
const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){
  
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  
  return -1;
}
*/
}

console.log(nextBigger(260866))

