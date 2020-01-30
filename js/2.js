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
  let x = String(n)
  let fl = 0 

  if (x.length < 2) return -1

  for (let i = 0; i < x.length; i++) {
    //.log(i, x[i], x[i+1])
    if (Number(x[i]) !== Number(x[i + 1])){     
      fl = 1
      break
    }    
  }

  if (fl == 0) return -1
  let nx
  
  
  for (let i = x.length - 1; i > 0; i--) {
    nx = x.slice(0, i - 1) +
   x.slice(i - 1, i + 1) //+
   //x.slice(i - 2, i - 1)  
    console.log(i, nx);
      
    
  }

  /*let nn = x.slice(0, x.length - 2) +
    x.slice(x.length - 1, x.length + 1) +
    x.slice(x.length - 2, x.length - 1)

  return Number(nn) > n ? Number(nn) : -1*/
  return nx
}


console.log(nextBigger(513));