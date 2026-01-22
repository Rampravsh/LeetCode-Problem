//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let dummy =new ListNode("dummy", head);
  console.log(dummy)
  let curr = dummy;
  let prev = dummy;
  while (curr != null) {
    if (curr.val == curr.next?.val) {
      let val = curr.val;
      while (curr.val == val) {
        curr = curr.next;
      }
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return dummy.next;
};

// examples
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))));
console.log(deleteDuplicates(head)); // [1,2,5] 