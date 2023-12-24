const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof position !== "number" ||
        position <= 0 ||
        position > this.getLength()) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.map(link => `( ${link} )`).join("~~");
    this.chain = [];
    return result;
  }
  
};

module.exports = {
  chainMaker
};
