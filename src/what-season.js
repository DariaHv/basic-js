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
    d.toString();
 * 
 */
function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!';
  //try{
  if(!date instanceof Date || isNaN(date.valueOf())) {
  throw new Error("'arr' parameter must be an instance of the Array!");}
  month =date.getMonth();
  if ([0,1,11].includes(month) ) return "winter";
  if ([2,3,4].includes(month) ) return "spring";
  if ([5,6,7].includes(month) ) return "summer";
  if ([8,9,10].includes(month) ) return "fall";
}

module.exports = {
  getSeason
};
