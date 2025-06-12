/**
 * Type definition for syntax check
 * @typedef {Object} SyntaxCheck
 * @property {number} myNumber
 * @property {string} myString
 * @property {Array} myArray
 * @property {Object} myObject
 */

/**
 * Create some basic variables
 * @returns {SyntaxCheck}
 */

function createVariables() {
  // TODO: Create a variable named 'myNumber', initialize it with the 'const' keyword and assign a number to it
  const myNumber = 47;
  //  TODO: Create 'myString' and assign a string to it
  const myString = 'name';
  //  TODO: Create 'myArray', put an Array into it and fill that with some data
  const myArray = [1,4,true, [3,4],'array'];
  //  TODO: Create 'myObject' and assign some object literal to it
  const myObject = {
    city: 'Eindhoven',
    location: 'Netherlands',
    day: 31
  };
  return { myNumber, myString, myArray, myObject };
  // return 'NOT IMPLEMENTED';
}

export default createVariables;

///
///
//
const myNumber = 42.0000000000024;
const myString = 'cR3aTe s0Me v@r1aBl3s';
const myArray = [myString, myNumber, new Date()];
const myObject = { myArray };

export { myArray, myNumber, myObject, myString };
