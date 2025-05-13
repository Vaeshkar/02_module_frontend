/* Array1 */
const array = [2, 4, 6, 8, 10, 12, 14, 16];
console.log("Base Array:");
console.log(array);

/* 1. Use Slice method to extract different portions of the array */
const newArray = array.slice(2);
console.log(newArray);

const newArray2 = array.slice(3, 5);
console.log(newArray2);

const endArray = array.slice(-1);
console.log(endArray)