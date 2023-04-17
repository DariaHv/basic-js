const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
 
  buf="";
  count=1;
  for (let i=0;i<str.length;i++){
   // if(i==str.length-1) buf+=(count>1)?count+str[i]:str[i];
    if(str[i]==str[i+1]) count++;
    else {buf+=(count>1)?count+str[i]:str[i];
    count=1;}
  }
return buf;
}

module.exports = {
  encodeLine
};
