/* Array 1 */
const array1 = [10,20,30,40,50];
/* Array 2 */
const array2 = ['x', 'y', 'z'];

/* 1. Remove the element at index 2. Add 35 and 36 */
array1.splice(2, 1, 35, 36)

/* 2. Remove the element at index 1. Add b and c with toSpliced */
const newArray2 = array2.toSpliced(1, 1, 'b', 'c')

/* 3. Print the Results */
console.log("Result Array1:")
console.log(array1)
console.log("Result newArray2:")
console.log(newArray2)