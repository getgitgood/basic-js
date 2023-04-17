const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain : [],

  getLength() {
    this.length = this.chain.length;
    return this.length;
  },
  addLink(value) {
    if (value === undefined)
    this.chain.push(`(  )~~`) 
    else this.chain.push(`( ${value} )~~`)
    this.length = this.chain.length;
    return this;
  },
  removeLink(position) {
    if (!(position > 0 && position < this.length && Number.isInteger(position))) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
      
    }
    position = position - 1;
    this.chain = this.chain.slice(0, position).concat(this.chain.slice(position + 1));
    this.length = this.chain.length;
    return this;
  },
  
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    result = this.chain.reduce((acc, i) => acc += i).slice(0, -2);
    
    this.chain = [];
    return result;
  }
};


module.exports = {
  chainMaker
};
