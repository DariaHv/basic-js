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
  if (!Array.isArray(arr)) {
  throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length<1) return [];
  let copy=[];
  for (let i=0;i<arr.length;i++){
    switch (arr[i]){
      case "--discard-next":{
        i==i+1;
        break;}
      case "--discard-prev":{
        if (i>0 && arr[i-2]!="--discard-next") copy.pop();
        break;}
      case "--double-next":{
        if(i<arr.length-1){
        copy.push(arr[i+1]);}
      break;}
      case "--double-prev":{
          if (i>0 && (arr[(i-2)]!='--discard-next')){
          copy.push(arr[i-1]);}
          break;}
      default:{
       copy.push(arr[i]); }
    }
  }
  return copy;

  
  //for (let i = 0, i<)
  /*let i = copy.indexOf("--discard-next");
  while (i>-1){
    copy.splice(i,2);
    i = copy.indexOf("--discard-next");
  }
    i = copy.indexOf("--discard-prev");
  while (i>-1){
    copy.splice(i-1,2);
    i = copy.indexOf("--discard-prev");
  }
  i = copy.indexOf("--double-next");
  while (i>-1){
    
    copy.splice(i,1,copy[i+1]);
    i = copy.indexOf("--double-next");
  }
  i = copy.indexOf("--double-prev");
  while (i>-1){
    copy.splice(i,1,copy[i-1]);
    i = copy.indexOf("--double-prev");
  }
  return copy;
/*let codes = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
let code = [];
codes.every(element => {
let i = arr.indexOf(element);
if (i>-1) {
  code[0]=i;
  code[1]=element;
  return false;
}
})
if (code.length<2) return arr;
switch (code[1]){
  case "--discard-next":
    return arr.slice(0,code[0]).concat(arr.slice(code[0]+2));
  case "--discard-prev":
    return arr.slice(0,code[0]-1).concat(arr.slice(code[0]+1));
  case "--double-next":
    return arr.slice(0,code[0]).concatconcat(arr[code[0]+1],arr.slice(code[0]+1));
  case "--double-prev":
    return arr.slice(0,code[0]).concatconcat(arr[code[0-1]],arr.slice(code[0]+1));
  default:
    return [];
}*/

}

module.exports = {
  transform
};
