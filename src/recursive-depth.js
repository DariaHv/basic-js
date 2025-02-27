const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(){
    //this.depth=0;
  }
  calculateDepth(arr) {
   let depth=0;
   if (arr==[]) return 1;
   if(Array.isArray(arr)){ 
    depth=1;
    let maxcount=0;
    for (let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){ 
      let count = this.calculateDepth(arr[i]) 
      if (count>maxcount)maxcount=count;}
}
   depth=depth+maxcount;}
    return depth;
  };
}

module.exports = {
  DepthCalculator
};
