'use strict';

function Set() {}

// REMOVE-START
Set.prototype.add = function (value) {
  return (this[value] = true);
};

Set.prototype.contains = function (value) {
  return !!this[value];
};

Set.prototype.remove = function (value) {
  return delete this[value];
};

Set.prototype.intersection = function (set) {
  const res = [];
  const keys = Object.keys(set)
  keys.forEach((key) => this.contains(key) && res.push(key));
  return res.length ? res : null;
};
// REMOVE-END

module.exports = Set;