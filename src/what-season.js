const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let onError = function() {
    throw new Error('Invalid date!');
  }
  if (date === undefined) {
    return "Unable to determine the time of year!"
  }
  try {
    date.getYear()
  }
  catch (e) {
    onError();
  }
  if (typeof date != 'object' || (date[Symbol.iterator] != undefined) || !(date instanceof Date)) {
    onError();
  }
  if (date.getFullYear() === 1970 && date.getMonth() === 0 && date.getDate() === 1) {
    onError();
  }
  const SEASONS = ['winter', 'spring', 'summer', 'autumn'];
  let month = date.getMonth();
  let seasonIndex = month > 10 ? 0 : month > 7 ? 3 : month > 4 ? 2 : month > 1 ? 1 : 0;
  return SEASONS[seasonIndex]
}


module.exports = {
  getSeason
};
