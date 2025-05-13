/* Array1 */
const array1 = [1,2,3,4,5];
/* Array2 */
const array2 = ['a', 'b', 'c', 'd', 'e'];

/* 1. Reverse the First Arra in Place */
array1.reverse()

/* 2. Create a Reversed Copy of the Second Array */
/* const reversedArray2 = [...array2].reverse(); */ /* shallow copy */
const reversedArray2 = array2.toReversed();

/* 3. Print the Results */
console.log("Reverse the Array1")
console.log(array1)

console.log("Reverse the Array2 as a Copy")
console.log(reversedArray2)