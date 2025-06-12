/**
 * Picks one random element from an Array
 * @param {Array<any>} arr
 * @returns {any} One randomly picked element from the input array
 */
function pickRandomElement(arr) {
  // TODO: Given an array of many things, return one randomly picked element
  if (arr.length === 0) {
    return undefined;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  const index = Math.floor(Math.random() * arr.length)
  return arr[index];

  // return 'NOT IMPLEMENTED';
}

export default pickRandomElement;
