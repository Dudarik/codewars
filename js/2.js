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
  //console.log(x);

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
}

//console.log(nextBigger(260866))

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.*/

function humanReadable(seconds) {
  let ms = new Date(seconds * 1000),
    hh = Math.floor(seconds / 3600),
    mm = Math.floor((seconds % 3600) / 60),
    ss = Math.floor((seconds % 3600) % 60)
  if (hh < 9) hh = 0 + hh.toString()
  if (mm < 9) mm = 0 + mm.toString()
  if (ss < 9) ss = 0 + ss.toString()
  return `${hh}:${mm}:${ss}`

  //p=n=>`0${n}`.slice(-2),humanReadable=(s)=>(m=s/60|0,p(m/60|0)+':'+p(m%60)+':'+p(s%60))
  /*function humanReadable(seconds) {
    return [(seconds / 3600) | 0, seconds % 3600 / 60, seconds % 3600 % 60].map(n => ('0' + ( '' + n|0)).substr(-2)).join(':')
  }*/
  /*
    function humanReadable(seconds) {
      return `${Math.floor(seconds / 3600).toString().padStart(2,'0')}:${Math.floor(seconds / 60 % 60).toString().padStart(2,'0')}:${(seconds % 60).toString().padStart(2,'0')}`
     }*/
}

//console.log(humanReadable(0))

/*Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, 
and returns the sum of all the interval lengths. 
Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. 
The first value of the interval will always be less than the second value. 
Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1, 4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, 
we can treat the interval as [1, 5], which has a length of 4.
*/

function sumIntervals(intervals) {

  let nArr = []

  for (const item of intervals) {

    for (let i = item[0]; i < item[1]; i++) {

      if (!nArr.includes(i)) nArr.push(i)
    }
  }
  return nArr.length
}
/*console.log(sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5]
]))

/*
Write a function that counts how many different ways you can make change for an amount 
of money, given an array of coin denominations. For example, there are 3 ways to give change 
for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations 
for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0*/

var countChange = function (money, coins) {

}

/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/
function res(a, b, result, carry, base) {
  if (a.length == 0 && b.length == 0 && !carry)
    return result;

  //берем младшие разряды
  var left = parseInt(a.pop() || '0', 10);
  var right = parseInt(b.pop() || '0', 10);

  //складываем и добавляем перебор с прошлой итерации
  var l = left + right + (carry || 0);

  //вызываем для следующих разрядов
  return res(a, b, l % base + (result || ""), Math.floor(l / base), base);
}

function add(a, b) {
  return res(a.toString().split(""), b.toString().split(""), "", "", 10).toString();
  /*
  function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}
add=(a,b,c=a=>('0'.repeat(150)+a).slice(-150),d=c(a),e=c(b))=>[...e].reduceRight(([a,b],c,e)=>[((f=+c+ +d[e]+b)%10)+a,f/10|0],['',0])[0].replace(/^0+/,'')
*/
}

//console.log(add('63829983432984289347293874', '90938498237058927340892374089'))
/*
In mathematics, the factorial of integer n is written as n!. 
It is equal to the product of n and every integer preceding it.
For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n 
and returns the value of n!.

You are guaranteed an integer argument. For any values outside 
the non-negative range, return null, nil or None (return an 
empty string "" in C and C++). For non-negative numbers a full 
length number is expected for example, 
return 25! = "15511210043330985984000000" as a string.

For more on factorials, 
see http://en.wikipedia.org/wiki/Factorial

NOTES:

The use of BigInteger or BigNumber functions has been disabled, 
this requires a complex solution

I have removed the use of require in the javascript language.
*/

function mul(x, y) {
  let xx = String(x).split('').reverse(),
    yy = String(y).split('').reverse(),
    tmp = []

  for (let i = 0; i < xx.length; i++) {
    for (let j = 0; j < yy.length; j++) {
      let m = xx[i] * yy[j]
      tmp[i + j] = (tmp[i + j]) ? tmp[i + j] + m : m;
    }
  }

  for (let i = 0; i < tmp.length; i++) {

    let num = tmp[i] % 10,
      move = Math.floor(tmp[i] / 10)
    tmp[i] = num

    if (tmp[i + 1])
      tmp[i + 1] += move
    else if (move != 0)
      tmp[i + 1] = move
  }
  return tmp.reverse().join('')
}

function factorial(n) {
  if (n < 1) return null
  let res = 1

  for (let i = 1; i <= n && i < 22; i++)
    res *= i

  if (n > 21) {
    for (let i = 22; i <= n; i++) {
      res = mul(res, i)
    }
  }

  return String(res)

  /*
  function factorial(n) {
  var res = [1];
  for (var i = 2; i <= n; ++i) {
    var c = 0;
    for (var j = 0; j < res.length || c !== 0; ++j) {
      c += (res[j] || 0) * i;
      res[j] = c % 10;
      c = Math.floor(c / 10);
    }
  }
  return res.reverse().join("");
}
   */
}

//let st = new Date()
//console.log(factorial(1000));
//console.log(Date.now() - st + 'ms');

/*
Task
You are given a string s. Every letter in s appears once.

Consider all strings formed by rearranging the letters in s. 
After ordering these strings in dictionary order, 
return the middle term. (If the sequence has a even length n, 
define its middle term to be the (n/2)th term.)

Example
For s = "abc", the result should be "bac". The permutations 
in order are: "abc", "acb", "bac", "bca", "cab", "cba" 
So, The middle term is "bac".

Input/Output
[input] string s

unique letters (2 <= length <= 26)

[output] a string

middle permutation.
*/


function fact(x) {
  let res = 1
  for (let i = 1; i <= x; i++) res *= i
  return res
}

function swap(a, b) {
  let t = a
  a = b
  b = t
}

/*function findCeil(arr, first, l, h) {
  let ceilId = l

  for (let i = l + 1; i < h; i++) {
    if (arr[i] > first && arr[i] < arr[ceilId]) {
      seilId = i;
    }
  }
  return ceilId
}*/

/*Python
from itertools import permutations

def middle_permutation(string):
  """
  Get the middle permutation of a sorted
  list of possible string permutations.
  """
  perms = [''.join(perm) for perm in
           permutations(string)]
  perms.sort()
  mid = len(perms)/2
  
  if len(perms) % 2:
      return perms[int(mid+0.5)]
  else:
      return perms[int(mid)-1]

*/

function middlePermutation(s) {

  let nArr = [s]
  let id = 0

  s = s.split('').reverse()


  let lenS = s.length,
    posPerm = fact(s.length)
  console.log(s);

  for (let i = 0; i < posPerm - 1; i++) {

    let tmp = s[id]
    s[id] = s[id + 1]
    s[id + 1] = tmp
    nArr.push(s.reverse().join(''))
    id++
    s.reverse()
    if (id == lenS - 1) {
      id = 0
    }
  }
  console.log(nArr.sort());
  return nArr[Math.ceil(lenS / 2)]
}

console.log(middlePermutation('abcd'))