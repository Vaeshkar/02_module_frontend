/* 1. Initialize and Array of Numbers */
const numbers = [5, 10, 15, 20, 25, 30]

/* 2. Use Filter Method to Create a New Array with Numbers Greater than 15 */
const filterNumbers = numbers.filter((num) => {
    return num >= 15;
})
console.log(filterNumbers);

/* 3. Initialize an Array of Objects */
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 88 },
    { name: "Eve", grade: 95 }
]

/* 4. Use the filter Method to Create a New Array with Students Who Scored Above 80 */
const scoreStudents = students.filter((score) => {
    return score.grade > 80 ;
})
console.log(scoreStudents);