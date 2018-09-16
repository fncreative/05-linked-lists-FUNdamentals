![cf](http://i.imgur.com/7v5ASc8.png) Linked List Data Structure
====
#### Version / Author
1.0.1 / 
Daniel Frey

#### Travis CI
[![Build Status](https://travis-ci.com/fncreative/05-linked-lists-FUNdamentals.svg?branch=master)](https://travis-ci.com/fncreative/05-linked-lists-FUNdamentals)

#### Configuration  
  * **index.js** -- The entry point to your module
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.travis.yml** -- travis-ci instructions
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **__tests__/** -- directory for holding your programs unit and integration tests

#### Testing  
  * Multiple tests have been written for each - One will insert a number and the other will
  insert a string (both at the head). The second will remove a number and then a string (from 
  the tail)

####  Documentation  
  * There are five files, index.js (which is the entry point), the LinkedList file and
    the node file. There are also two test files, one for the list, and another for node.
  * instructions:
    * clone the repo and run npm i to get all of the required dependencies
    * running the test requires "npm test" from the command prompt

#### Feature Tasks  
* implement a Singly Linked List (SLL) data structure
* implement `remove(offset)` methods to the SLL class
  * offset is an integer representing how many nodes to traverse before removal
	* the head of the linked lists represents offset 0
* in a comment within each function, note the it's Big-O runtime

#### Stretch Goals not yet implemented
* implement `append(value)`, `prepend(value)`, `reverse()` methods to the SLL class

