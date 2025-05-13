/* 1. Global and Function Scope with VAR */
var nameStudent = "Dennis";
console.log(nameStudent) /* Output: Dennis */

var anotherFunction = function() {
    var nameStudent = "Hendrik";
    console.log(nameStudent)
}
anotherFunction() /* Output: Hendrik */

/*  2. Block Scope with let and const */
if (true) {
    let year = 2025 ;
    const day = "Tuesday";
    console.log(year, day); /* Output: 2025, Tuesday */
    year = 2026;
    /* day = "Wednesay"; */
    console.log(year, day); /* Output: 2026, Tuesday */
};

/* console.log(year, day)  */
/* Output: Reference Error, year and day are defined in the block scope */

/* 3. Redeclaration with VAR */

if (true) {
    nameStudent = "Adriaan";
}
console.log(nameStudent) /* Output: Adriaan */

/* 4. Usage of const for Arrays and Objects */
const newArray = [1,2,3,4]
const newObj = {
    name: "Dennis",
    age: 47,
    location: "Germany"
}

// Log new const before changes
console.log("Before:")
console.log(newArray)
console.log(`Name: ${newObj.name} and Age: ${newObj.age}.`)

newArray.push(5) /* adding a 5 at the end */
newArray[0] = 100; /* changing position index 0 to 100 */

newObj.age = 48; /* updating the age */
newObj.hobby = "Coding" /* adding a new key/value */

// Log conts after changes
console.log("After:")
console.log(newArray)
console.log(`Name: ${newObj.name}, Age: ${newObj.age} and ${newObj.hobby}.`)