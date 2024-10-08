'use strict';

const helpers = require('./hash-table-helpers.js');

// These are your helpers, they're used to generate
// the storage and get the hash respectively. For more
// information check the "hash-table-helpers.js" file.
const Storage = helpers.Storage;
const hash = helpers.hash;

function HashTable (size) {
  // REMOVE-START
  this.size = size;
  this.storage = new Storage(size);
  this.used = 0; // for self-resizing
  // REMOVE-END
}

// REMOVE-START
HashTable.prototype.insert = function (key, value) {
  const index = hash(key, this.size);
  const head = this.storage.get(index);
  let node = head;
  while (node) {
    if (node.key === key) {
      node.value = value;
      return true;
    }
    node = node.next;
  }
  const newNode = {key, value};
  if (head) newNode.next = head;
  this.storage.set(index, newNode);
  this.used++;
  this._checkSize();
  return true;
};

HashTable.prototype.retrieve = function (key) {
  const index = hash(key, this.size);
  let node = this.storage.get(index);
  while (node) {
    if (node.key === key) return node.value;
    node = node.next;
  }
  return undefined;
};

HashTable.prototype.remove = function (key) {
  const index = hash(key, this.size);
  let node = this.storage.get(index);
  if (node) {
    if (node.key === key) {
      this.storage.set(index, node.next);
      this.used--;
      this._checkSize();
      return true;
    }
    while (node.next) {
      if (node.next.key === key) {
        node.next = node.next.next;
        this.used--;
        this._checkSize();
        return true;
      }
      node = node.next;
    }
  }
  return false;
};

HashTable.prototype._checkSize = function () {
  const ratio = this.used / this.size;
  const min = 10;
  if (ratio > 0.75) {
    this._resize(this.size * 2);
    return 'resizing up';
  }
  if (this.size > min && ratio < 0.25) {
    this._resize(Math.floor(this.size / 2));
    return 'resizing down';
  }
  return true;
};

HashTable.prototype._resize = function (newSize) {
  const temp = {
    size: newSize,
    storage: new Storage(newSize),
    used: 0,
    _checkSize: function () {return false;}
  };
  for (let i = 0; i < this.size; i++) {
    let node = this.storage.get(i);
    while (node) {
      this.insert.call(temp, node.key, node.value);
      node = node.next;
    }
  }
  delete temp._checkSize;
  Object.assign(this, temp);
  return true;
};
// REMOVE-END

module.exports = HashTable;