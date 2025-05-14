// use reduce to get the multiplication total of an array of numbers [1, 2, 3 ,4]  => 24
const numbers = [1,2,3,4]

const sumNumbers = numbers.reduce((acc, num) => acc + num, 0)

console.log("Sum of the Numbers Array: ");
console.log(sumNumbers);

// use reduce to count how many negative and positive numbers exist in an array of numbers [10, 20, 0, 5, -2, 1, -20]  => {positive: 5, negative: 2}
const numberz = [10, 20, 0, 5, -2, 1, -20]

const countNumberz = numberz.reduce((acc, count) => {
    if (count >= 0) acc.positive += 1;
    else if (count < 0) acc.negative += 1;

    return acc;
}, {positive: 0, negative: 0});

console.log("Counts of the Numbers Array {Object return}: ");
console.log(countNumberz);

// use reduce to count the repeated strings from an array of strings ['The', 'the', 'or', 'hello'] => {the: 2, or: 1, hello: 1}
const strings = ['The', 'the', 'or', 'hello']

const repeatStrings = strings.reduce((acc, count) => {
    // reduce the words to lower case
    const word = count.toLowerCase();
    // check the word with the strings, if yes add 1 to count
    if (word === 'the') acc.the += 1
    else if (word === 'or') acc.or += 1
    else if (word === 'hello') acc.hello += 1

    return acc;
}, {the: 0, or: 0, hello: 0});

console.log("Repeats of the Strings Array {Object return}: ");
console.log(repeatStrings);