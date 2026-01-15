# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr=head
        l=0
        while curr!=None:
            curr=curr.next
            l+=1

        curr =head
        for i in range(l//2):
            curr=curr.next
        
        return curr

# Example usage:
# Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)  
solution = Solution()
middle_node = solution.middleNode(head)
print(middle_node.val)  # Output: 3