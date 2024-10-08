'use strict';

function Tree (value) {
  // REMOVE-START
  this.value = value;
  this.children = [];
  // REMOVE-END
}

// REMOVE-START
Tree.prototype.addChild = function (value) {
  this.children.push(value);
  return true;
};

Tree.prototype.contains = function (value) {
  const stack = [];
  let current;
  stack.push(this);
  while (stack.length > 0) {
    current = stack.pop();
    if (current.value === value) return true;
    else {
      for (let i = 0; i < current.children.length; i++) {
        stack.push(current.children[i]);
      }
    }
  }
  return false;
};
// REMOVE-END

module.exports = Tree;