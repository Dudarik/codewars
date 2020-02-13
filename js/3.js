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


