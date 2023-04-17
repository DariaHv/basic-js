const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members))return false;
  return members.filter(currentValue =>(typeof currentValue === "string" || currentValue instanceof String)&&currentValue.length>0)
  .map(x=>x.replace(/\s/g,"").toUpperCase()).sort()
  .reduce(  (accumulator, currentValue) => accumulator + currentValue[0],"")
 
}

module.exports = {
  createDreamTeam
};
