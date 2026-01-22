//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head == null || head.next == null) {
    return head;
  }
  let s = head,
    f = head;
  let i = 1,
    curr = head;
  while (curr.next != null) {
    i++;
    curr = curr.next;
  }
  if (k >= i) {
    k = k % i;
  }
  if (k == 0) {
    return head;
  }
  for (let i = 0; i < k; i++) {
    f = f.next;
  }
  while (f.next != null) {
    f = f.next;
    s = s.next;
  }
  f.next = head;
  head = s.next;
  s.next = null;
  return head;
};

// examples
// let head = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
// );
// console.log(rotateRight(head, 2)); // [4,5,1,2,3]
let head2 = new ListNode(0, new ListNode(2));
console.log(rotateRight(head2, 2));
