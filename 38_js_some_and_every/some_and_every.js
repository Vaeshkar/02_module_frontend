/* 1. Initialize an Array of Numbers */
const numbers = [4,8,15,16,23,42]

/* 2. Use the Some Methods to Check of Numbers Greater Than 20 */
const someNumbers = numbers.some(num => {
    return num > 20;
})

console.log(someNumbers);

/* 3. Use the Every Method to Check for Numbers Less than 50 */
const everyNumbers = numbers.every(num => {
    return num < 50;
})

console.log(everyNumbers);

/* 4. Initialize an Array of Objects */
const students = [
    { name: "Alice", age: 25, passed: true },
    { name: "Bob", age: 22, passed: false },
    { name: "Charlie", age: 27, passed: true },
    { name: "David", age: 20, passed: true }
]

/* 5. Use the some Method to Check if Any Student Failed */
const someStudents = students.some(value => {
    return value.passed === false;
})
console.log(someStudents);

/* 6. Use the every Method to Check if All Students are Older than 18 */
const everyStudents = students.every(ageCheck => {
    return ageCheck.age >= 18;
})
console.log(everyStudents);