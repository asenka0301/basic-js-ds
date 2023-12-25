const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.head) {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
  }

  dequeue() {
    const value = this.head.value;

    if (this.head.next) {
      let newHead = this.head.next;
      this.head.next = null;
      this.head = newHead;
    }
    return value;
  }
}

module.exports = {
  Queue
};
