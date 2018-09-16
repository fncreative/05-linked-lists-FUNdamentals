'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  remove(value) {
    // removes a node based on the input value
    // Big O = O(n) n = number of Nodes
    if (!this.head) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
    }

    let previousNode = this.head;
    let currentNode = this.head.next;

    while (currentNode) {
      if (currentNode.value === value) {
        previousNode.next = currentNode.next;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return this;
  }

  insertAtHead(value) {
    // inserts a value at the head of the list
    // Big O = O(1)
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtTail(value) {
    // inserts a value at the tail of the list
    // Big O = O(1)
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }
};
