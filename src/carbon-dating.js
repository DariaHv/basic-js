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
 *ln(15/8.0)1.22×10−4 yr−1 isNaN(sampleActivity)||(res<0)?false:
 */
function dateSample(sampleActivity) {
  if (!(typeof sampleActivity === "string" || sampleActivity instanceof String)||sampleActivity.split(".").length>2) return false;
  saFloat=Number(sampleActivity);
  let res = Math.ceil(Math.log (MODERN_ACTIVITY/saFloat)*HALF_LIFE_PERIOD/0.693);
 return (!isFinite(saFloat)||saFloat<0||saFloat>15||!isFinite(res))?false:res;
}

module.exports = {
  dateSample
};
