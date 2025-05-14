const numbers = [10,20,30,40,50]

/* 2. Use the find Method to Locatte the Numbers Than 25 */

const findNumbers = numbers.find((num) => {
    return num > 25;
})

console.log(findNumbers);

/* 3. Ititialize an Array of Objects */

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
]

/* 4. Use to find Methods to locate a person Names "Charlie" */
const findPeople = people.find((person) => {
    return person.name === "Charlie";
})

console.log(findPeople);