function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}

function digital_root(n) {
    if (n < 10) return n;

    let sum = 0;
    let tmp = String(n);

    for (let item of tmp) sum += +item;

    return digital_root(sum);
}
/*function digital_root(n) {
    return (n - 1) % 9 + 1;
}*/
//t
function getSum(a, b) {
    if (a == b) return a;

    let start, end;

    if (a < b) {
        start = a;
        end = b;
    } else if (b < a) {
        start = b;
        end = a;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) sum += i;

    return sum;
}

function getSum2(a, b) {
    if (a == b) return a;

    let min = a,
        max = b;

    if (a > b) {
        min = b;
        max = a;
    }

    return (max - min + 1) * (max + min) / 2;
}



/*
function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}*/


//function gosntfde(s) {
// symBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// result = "";
// for( cur = 0; cur < s.length; cur += 4 ) // 0, 4, 8, 12, 16
// {
// var c = new Array(4), nextChar;
// for( curC = 0; curC < 4; curC++) //0, 1, 2, 3
// {
// curChar = s.substring(curC + cur, curC + cur + 1)
// if( '=' == curChar) c[curC] = 0; else c[curC] = symBase.indexOf(curChar);
// }
// result += String.fromCharCode(((c[0] << 2) % 256) | (c[1] >> 4));
// result += String.fromCharCode(((c[1] << 4) % 256) | (c[2] >> 2));
// result += String.fromCharCode(((c[2] << 6) % 256) | c[3]);
// }
// return result;
// }
//function gosntf(s) {
// window.location = "mailto:" + gosntfde(s);
// }
//

/*function findMissingLetter(array) {
    let symBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (const key of array) {
        let tmp =
    }

    return ' ';
}*/



console.log(getSum(100, 2));
console.log(getSum2(100, 2));
//console.log('Aeyrwbz ', digital_root(132189));
//console.log( solution(10) );