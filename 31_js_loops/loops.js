/* 1. Initialize an Array of Numbers */
const array = [1,2,3,4,5,6,7];

/* 2. Irterate Over the Array with a for Loop */
for (let num in array) {
    console.log(`Current number of Array using 'in': ${num}.`)
}

/* 3. Iterate Over the Array with a for...of Loop */
for (const arr of array) {
    console.log(`Current number of Array using 'of': ${arr}.`)
}

/* 4. Iterate over the Array in the classic Js way with a for Loop */
for (let i = 0; i < array.length; i++) {
    console.log(`Current number of Array using i++ and index position: ${array[i]}.`)
}

/* 5. Iterate over the Array with using forEach */
array.forEach(element => {
    console.log(`Current number of Array using foEach element: ${element}.`)
});