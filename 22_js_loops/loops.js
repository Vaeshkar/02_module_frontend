const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

console.log(animals)
console.log(0) // first list item
console.log(animals.length - 1) // last list item

/* For loop */
for (let i = 0; i < animals.length; i++ ) {
    console.log("for: ", animals[i])
}

/* While loop */
let index = 0
while (index < animals.length) {
    console.log("while: ", animals[index])
}

/* Do/While loop */
let i = 0

do {
    console.log("do: ", animals[i])
    i++;

} while (i < animals.length)