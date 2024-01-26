# Data structures - Part 2

More data structures fun! Complete each section and become a master of data science.

Every data structure in this exercise should correspond to a class in your code (use the pseudo-classical approach, or the new [ES6 class definition](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)).

You can assume that the `value` property of each element is a string or a number.

## Set

Read about sets [here](https://en.wikipedia.org/wiki/Set_(abstract_data_type)), then implement one that provides the following methods:

- `add(value)` - Adds a value to the set and returns `true`.
- `contains(value)` - Returns a boolean, reflecting whether the value can be found in the set.
- `remove(value)` - Deletes a value from the set and returns `true`.

## Tree

Read about trees [here](https://en.wikipedia.org/wiki/Tree_(data_structure)), then implement one so that each instance has a `value` and `children` property.

The class should provide these methods:

- `addChild(node)` - Adds a child (which is a new sub-tree) to the current node and returns `true`.
- `contains(value)` - Returns a boolean, reflecting whether the value can be found in the current node or any of its children.

## Hash table

Read about hash tables [here](https://en.wikipedia.org/wiki/Hash_table), then implement one so that each instance has a `size` property, which corresponds to the size of the underlying storage.

Use the provided hash function to convert any key into an index. Try interacting with it a bit first to get a sense of what it does. Keep in mind that your final implementation must handle conflicts (using linked lists).

The class should provide these shared methods:

- `insert(key, value)` - Takes a key (string), stores it with the associated value, and returns `true`.
- `retrieve(key)` - Returns the value associated with the key (if the key does not exist, it returns `undefined`).
- `remove(key)` - Returns a boolean, reflecting whether the key / value pair has been removed.

## Getting started

To install the required dependencies run `npm install` .

Your data structures are stored as separate files in the `scripts` folder.

## Extra credits

- To prevent collisions, make your hash table self-resizing. It should double in size as soon as 75% of the available space has been filled, and shrink to half when space usage falls below 25%.
- Add functionality to sets, so that you can find the intersection between two of them (i.e. a list of the values they share), using the method `A.intersection(B)`. There’s a trade-off between space (memory) and time (computation), can you figure out the possible implementations?
- Read about the following data structures and implement any that attract your interest:
  - [Heap](https://en.wikipedia.org/wiki/Heap_(data_structure))
  - [Binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree)
  - [Graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))
  - [Trie](https://en.wikipedia.org/wiki/Trie)
  - [B-tree](https://en.wikipedia.org/wiki/B-tree)
  - [Red-black tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- Write tests for the new data structure(s) you have implemented.
