/* Array1 */
const array = ['apple', 'banana', 'cherry', 'date'];
console.log("Base Array:");
console.log(array);

/* 1. Use the Join method to create differnt strings by joining the array elements with various delimiters */

const wordsArray = array.join(' ');
console.log(wordsArray);

const lettersArray = array.flatMap(word => word.split('')).join('-');
console.log(lettersArray);

const dashArray = array.join('-');
console.log(dashArray);

const commaArray = array.join(', ');
console.log(commaArray);

const emptyArray = array.join('');
console.log(emptyArray);

const andArray = array.join(' and ');
console.log(andArray);