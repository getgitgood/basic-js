const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let blob = arr.map((item, i, arr) => {
    if (item === '--double-next') {
      if (arr[i + 1]) {
        item = arr[i + 1]
      }
    }
    if (item === '--double-prev') {
      if (arr[i - 1] && arr[i - 2] != '--discard-next') {
        item = arr[i - 1]
      }
    }
    return item
  }).filter((item, i, arr) => {
    return !(arr[i + 1] === "--discard-prev" || arr[i] === "--discard-prev" || arr[i - 1] === "--discard-next" || arr[i] === "--discard-next" || arr[i] === '--double-next' || arr[i] === '--double-prev')
  })
  return blob
}

module.exports = {
  transform
};
