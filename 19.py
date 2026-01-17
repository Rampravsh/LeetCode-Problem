# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        l=0
        curr=head
        while curr:
            l+=1
            curr=curr.next
        if l==n:
            return head.next
        curr=head
        for _ in range(l-n-1):
            curr=curr.next
        curr.next=curr.next.next
        return head

# example usage:
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
n = 2
sol = Solution()
new_head = sol.removeNthFromEnd(head, n)
print(new_head)  # Output the modified linked list