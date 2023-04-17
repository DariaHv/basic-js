const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(!options.hasOwnProperty('addition'))options.addition="";
  if(!options.hasOwnProperty('repeatTimes'))options.repeatTimes=1;
  if(!options.hasOwnProperty('additionRepeatTimes'))options.additionRepeatTimes=1;
  if(!options.hasOwnProperty('separator'))options.separator='+';
  if(!options.hasOwnProperty('additionSeparator'))options.additionSeparator='|';
  
  let withAdd = str+((options.addition+options.additionSeparator).repeat(options.additionRepeatTimes-1))+options.addition
  return (withAdd+options.separator).repeat(options.repeatTimes-1)+withAdd;
}

module.exports = {
  repeater
};
