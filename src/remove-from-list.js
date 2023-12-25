const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function deleteNode (l, k) {
  if (!l) {
    return -1;
  }

  if (l.value === k) {
    if (l.next) {
      l.value = l.next.value;
      l.next = l.next.next;
      return 1;
    } else {
      return 0;
    }
  }

  if (deleteNode(l.next, k) === 0) {
    l.next = null;
    return 1;
  }
}

function removeKFromList(l, k) {
  let flag = deleteNode(l, k);
  let currNode = l;
  while (flag !== -1) {
    flag = deleteNode(currNode.next, k);
    currNode = currNode.next;
  }
  return l;
}

module.exports = {
  removeKFromList
};
