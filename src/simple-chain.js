const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:  [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
   this.chain=this.chain.push(value);
  },
  removeLink(position) {
  this.chain.splice(position,1);
  },
  reverseChain() {
    this.chain.reverse();
  },
  finishChain() {
    return "("+ this.chain.join(")~~(")+"0";
  }
};

module.exports = {
  chainMaker
};
