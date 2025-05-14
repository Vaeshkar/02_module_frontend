/* 1. Initialize an Array of Numbers */
numbers = [1,2,3,4,5]
console.log("Base Array: ")
console.log(numbers)

/* 2. Use the map Method to create a new Array with Doubled Values */
const doubledNumbers = numbers.map((num) => {
    return num * 2
})

console.log("DoubledNumbers: ")
console.log(doubledNumbers)

/* 3. Use the Map Method to Create a New Array of Strings */

const stringNumbers = numbers.map((num) => {
    return `Number: ${num}.`
})

console.log("StringsNumbers: ")
console.log(stringNumbers);

/* 4. Use the map Method to Create a new Array of Objects */
const numberObjects = numbers.map((num) => {
    return {original : num, squared : num*num}
})

console.log("NumbersObjects: ");
console.log(numberObjects);