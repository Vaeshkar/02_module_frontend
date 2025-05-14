/* 1. Initialze an Array of Numbers */
const numArray = [1,2,3,4,5,6,7]

/* 2. Use the forEach Method to Print each Number */
numArray.forEach((num, index) => {
    return console.log(num)
} )

/* 3. Use the foEach Method to Calculate the Sum of the Numbers */
let sum = 0
console.log("Base Num:")
console.log(sum)
numArray.forEach((num, index) => {sum += num;});
console.log("Calculate Num:")
console.log(sum)

/* 4. Use the forEach Method to Create a New Array with Squared Values */
let squaredNumbers = []

numArray.forEach((num, index) => {
    squaredNumbers.push(num * num);
})
console.log(squaredNumbers)