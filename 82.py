# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None or head.next == None:
            return head
        p1 = head
        p2 = head.next
        if p1.val==p2.val and p2.next==None:
            return None
        while p2.next != None:
            if head.val == p2.val:
                while head.val == p2.val:
                    if p2.next==None:
                        return None
                    p2 = p2.next
                head = p2
                p1 = p2
                if p2.next==None:
                    return head
                p2 = p2.next
                if p1.val==p2.val and p2.next==None:
                    return None
            else:
                if p2.val != p2.next.val:
                    p1 = p1.next
                    p2 = p2.next
                else:
                    curr = p2
                    while curr.val == p2.val:
                        if p2.next==None:
                            p1.next=None
                            return head
                        p2 = p2.next
                    p1.next = p2
        return head


# example usage:
head = ListNode(1, ListNode(1))
sol = Solution()
new_head = sol.deleteDuplicates(head)
print(new_head)  # Output the modified linked list

                


            