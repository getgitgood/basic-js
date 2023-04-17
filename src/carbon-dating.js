const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  const SAMPLE = parseFloat(sampleActivity);
  if (!SAMPLE || SAMPLE < 0 || SAMPLE > MODERN_ACTIVITY ) return false;

  const SAMPLE_HALF_LIFE = HALF_LIFE_PERIOD / Math.log(2);
  const T = Math.log(MODERN_ACTIVITY/SAMPLE) * SAMPLE_HALF_LIFE
  
  return Math.ceil(T)
}

module.exports = {
  dateSample
};
