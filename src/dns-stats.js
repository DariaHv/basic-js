const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let o={}
  let all=[]
  domains.forEach((element) => {
    arr=element.split(".")
    for(let i=0; i<arr.length;i++){
      all.push("."+arr.slice(i).reverse().join("."));
    }})
   let un = [...new Set(all)];
    for (i=0;i<un.length;i++){
      let count =0;
        for(let j=0;j<all.length;j++)
        {if(un[i]==all[j]) count++;}
      o[un[i]]=count;
    }
  return o;
  
}

module.exports = {
  getDNSStats
};
