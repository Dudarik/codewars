class Potion {
	// magic goes here...
	constructor(arrColor, volume) {

		this.color = arrColor
		this.volume = volume
	}

	mix(shrinking_solution) {
		let nColor = []
		let nVol = this.volume + shrinking_solution.volume

		for (let i = 0; i < this.color.length; i++)
			nColor.push(Math.ceil(((this.color[i] * this.volume) + (shrinking_solution.color[i] * shrinking_solution.volume)) / nVol))

		return new Potion(nColor, nVol)
	}
}
/*
let potions = [
	new Potion([153, 210, 199], 32),
	new Potion([135,  34,   0], 17),
	new Potion([18,   19,  20], 25),
	new Potion([174, 211,  13],  4),
	new Potion([255,  23, 148], 19),
	new Potion([51,  102,  51],  6)
]
console.log(potions);
let a = potions[0].mix(potions[1])
b = potions[0].mix(potions[2]).mix(potions[4])
console.log(b);


/*c = potions[1].mix(potions[2]).mix(potions[3]).mix(potions[5]),
d = potions[0].mix(potions[1]).mix(potions[2]).mix(potions[4]).mix(potions[5]),
e = potions[0].mix(potions[1]).mix(potions[2]).mix(potions[3]).mix(potions[4]).mix(potions[5]);*/

/*
felix_felicis       = new Potion([255, 255, 255],  7)
shrinking_solution  = new Potion([ 0, 254,  0], 12)

new_potion          =  felix_felicis.mix(shrinking_solution)

console.log(felix_felicis,shrinking_solution,new_potion);*/

//new_potion.color   ==  [127, 159, 127]
//new_potion.volume  ==  19


function solution(list) {
	let str = '',
		tArr = [],
		fl = false

	for (let i = 0; i < list.length; i++) {
		if (fl) {
			tArr.push(list[i])
			fl = false
		}
		if ((Math.abs(list[i + 1] - list[i])) == 1) {

			tArr.push(list[i])
			fl = true


		} else if ((Math.abs(list[i + 1] - list[i])) != 1) {
			if (tArr.length == 2) {
				str += tArr[0] + ',' + tArr[tArr.length - 1] + ','
				tArr = []
			} else if (tArr.length > 2) {
				str += tArr[0] + '-' + tArr[tArr.length - 1] + ','
				tArr = []
			} else {
				str += list[i] + ','
			}
		}
	}
	return str.slice(0, str.length - 1)
}
/*
function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
} 
function solution(nums){
 nums = nums.map((v, i) => nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v);
    return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-');
}
*/
//console.log(Math.abs(-2 - -3));
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns "-6,-3-1,3-5,7-11,14,15,17-20"


/**************************************************************** */

/*John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper 
a list of distances between these towns. ls = [50, 55, 57, 58, 60]. 
John is tired of driving and he says to Mary that he doesn't want to drive more than 
t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is 
the biggest possible to please Mary and John?

Example:

With list ls and 3 towns to visit they can make a choice between: 
[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances 
of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) 
will take as parameters 
t (maximum sum of distances, integer >= 0), 
k (number of towns to visit, k >= 1) and 
ls (list of distances, all distances are positive or null integers and 
	this list has at least one element). 
	The function returns the "best" sum ie the biggest possible sum of k distances 
	less than or equal to the given limit t, if that sum exists, or otherwise 
	nil, null, None, Nothing, depending on the language. 

Examples:

ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
*/

/*function chooseBestSum(t, k, ls) {
	if (ls.length < 3 || k < 1) return null

	let tC = 0,
		bSum = 0
	ls.sort((a, b) => {
		return b - a
	})

	for (const dist of ls) {
		if (dist < t && (dist + bSum) < t && tC <= k) {			
			tC++
			bSum += dist
			console.log(tC, dist, bSum);
		}
	}
	return bSum
}*/



//chooseBestSum(t, k, ls);

//console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]), 't')

/*function chooseBestSum(t, k, ls) {
  if (ls.length < k){
    return null;
  }
  var tripCounter = 0;
  var totalDistance = 0;
  var distances = ls;
  distances.sort(function (a,b) {
    return b - a;
  });
  console.log(distances);
  for (var i = 0; i < distances.length; i++){
    if (distances[i] < t && (distances[i] + totalDistance) < t && tripCounter <= k){
      tripCounter ++;
      totalDistance += distances[i];
    }
  }
  return totalDistance
}*/
genBinArr = (arrLen, n, s)=>{
	let bArr = [],
	cnt = 1
	console.log(arrLen, n, s, 't');
	
	for (let i = 0; i < arrLen; i++) {		
		//bArr[i] = (i >= s - 1) ? (cnt <= n) ? 1 :0 :0
		bArr[i] = 0
		if (i >= s - 1 ){
			if (cnt <= n){
				bArr[i] = 1
				cnt++			
			}
		}
		
	}

	return bArr
}

//console.log( genBinArr(7,3,3) );

sumArr = (arr) => {
	let n = 3,
		bArr = [],
		tArr = [],
		bSum = 0,
		tSum = 0

	bArr = genBinArr(arr.length, n, 0)	

	
	let i = 1,
		e = i + 1,
		p = n - e

	while (true) {
		if (i == 7 /*bArr.length - n*/  ) break
		
		tArr.push(Array.from(bArr))		

		if (p < bArr.length - 1) {
			
			[bArr[p], bArr[p + 1]] = [bArr[p+1], bArr[p]]			
			p++
			
			//console.log(i, p, bArr.length);			
		} else if (p == bArr.length - 1 && e < bArr.length - n - 1 ){
			console.log(bArr, p, i, e);
			
			e++
			p = i			
		} else {
			i++
			//console.log(i);			
			/*e = i + 1
			p = n - e
			bArr = genBinArr(arr.length, n, i)*/

			//console.log('new array');
			//console.log(tArr);
			
			
		} //if (e == bArr.length - n - 1)
	}

	/*for (let i = 0; i < arr.length; i++) {
		if (bArr[i]) tSum += arr[i]
	}*/
console.log(tArr);
	//return bSum
}


let ls = [91, 74, 73, 85, 73, 81, 87];
let k = 3;
let t = 228;




sumArr(ls)
//console.log();

//console.log(sumArr([50, 55, 56, 57, 58]));
