//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(); // Dummy node to simplify handling head
  let curr = dummy;
  let carry = 0;

  while (l1 != null || l2 != null || carry > 0) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    curr.next = new ListNode(sum);
    curr = curr.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }
  return dummy.next;
};

// example usage:
let l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
  ),
);
let l2 = new ListNode(9, new ListNode(9, new ListNode(9)));
let result = addTwoNumbers(l1, l2);
console.log(result); // Output: [8, 9, 9, 9, 0, 0, 1]
