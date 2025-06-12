/**
 * Counts the occurrences of different data types within an array.
 *
 * @param {Array<any>} arr - The input array containing various elements.
 * @returns {Array<number>} An array of numbers representing the counts of different types in the following order:
 * [countNum, countStr, countArr, countObj, countBool].
 * - Index 0: Count of Numbers
 * - Index 1: Count of Strings
 * - Index 2: Count of Arrays
 * - Index 3: Count of Objects
 * - Index 4: Count of Booleans
 */
function countTypes(arr) {
  // TODO: Loop  over the Array 'arr', count all Numbers, Strings, Objects and so on and return the total of each type in one array in the right order ([CountNum, CountStr, CountArr, CountObj, CountBool])
  let countNum = 0;
  let countStr = 0;
  let countArr = 0;
  let countObj = 0;
  let countBool = 0;

  for (const element of arr) {

    /* if (element === null) {
      continue;
    } */

    if (Array.isArray(element)) {
      countArr++;
    } else if (typeof element === "object") {
      countObj++;
    } else if (typeof element === "string") {
      countStr++;
    } else if (typeof element === "number") {
      countNum++;
    } else if (typeof element === "boolean") {
      countBool++;
    }
  }
  const countTypesArr = [countNum, countStr, countArr, countObj, countBool];
  return countTypesArr;
  // return 'NOT IMPLEMENTED';
}

export default countTypes;
