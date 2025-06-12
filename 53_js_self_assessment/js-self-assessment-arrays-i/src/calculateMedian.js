/**
 *
 * @param {Array<number>} arr
 * @returns {number}
 */
function calculateMedian(arr) {
  // TODO: return the median in a set of *unsorted* numbers (hint: array length can be odd or even)
  // TODO: don't mutate the original array!
  try {
    if (arr.length === 0) {
      return;
    }
    // Sort copy array and check the numbers and swap them if they are not minus
    const sortedArr = [...arr].sort((a,b) => (a - b));

    // check if even or odd
    if (sortedArr.length % 2 === 1) {
      return sortedArr[Math.floor(sortedArr.length / 2)];
    } else {
      // make a middle value for the even
      const mid = sortedArr.length / 2; // even number
      return (sortedArr[mid - 1] + sortedArr[mid]) / 2; // middle number left and right
    }

  } catch (e) {
    console.error(e);
  }
  
  // return 'NOT IMPLEMENTED';
}

export default calculateMedian;
