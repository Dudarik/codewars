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
  let sum = 0

  for (const item of intervals) {    
      sum += (item[1]- item[0])
      console.log(sum, item[1], item[0] );
      
  }
  console.log(sum);
}

sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5]
])