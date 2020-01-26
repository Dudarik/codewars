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

function zero() {
    return 0;
}

function one() {
    return 1;
}

function two() {
    return 2;
}

function three() {
    return 3;
}

function four() {
    return 4;
}

function five() {
    return 5;
}

function six() {
    return 6;
}

function seven() {
    return 7;
}

function eight() {
    return 8;
}

function nine() {
    return 9;
}

function plus(dig) {
    return
}

function minus() {}

function times() {}

function dividedBy() {}

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3


function likes(names) {
    if (names.length == 0) return "no one likes this";
    switch (names.length) {
        case 1:
            return `${names[0]} likes this`;
            break;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
            break;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
            break;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
            break;
    }
}



/* Не правильная функция лохопедро!!!
function deleteNth(arr, n) {
    let unqArr = [];
    for (const key of arr) {
        if (!unqArr.includes(key)) {
            unqArr.push(key);
        }
    }
    if (n < 2) return unqArr;

    let resArr = [];

    for (let i = 0; i < n; i++) {
        Array.prototype.push.apply(resArr, unqArr);
    }
    return resArr;
}*/
/*  не правильная функция нубло!!!
function deleteNth(arr, n) {
    let mArr = [];
    let resArr = [];
    for (const key of arr) {
        console.log(key);
        
        if (!mArr.includes(key)) mArr[key] = 0;
        //console.log(mArr);
        
        if (mArr[key] < n) {
            resArr.push(arr[key]);
            mArr[key]++;
            //console.log(mArr);
            
        }
    }
    return resArr;
}

//([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])

console.log(deleteNth([1, 1, 1, 1], 2)); // return [1,1]

console.log(deleteNth([20, 37, 20, 21], 1)); // return [20,37,21]


//likes [] // must be "no one likes this"
//likes ["Peter"] // must be "Peter likes this"
//likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
//likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
//let likes_arr = ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

//console.log(likes(likes_arr));

//на всякий случай оставим



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



//console.log(getSum(100, 2));
//console.log(getSum2(100, 2));
//console.log('Aeyrwbz ', digital_root(132189));
//console.log( solution(10) );