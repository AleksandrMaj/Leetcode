/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public boolean isPalindrome(ListNode head) {
        StringBuilder sb1 = new StringBuilder();
        
        ListNode currentNode = head;
        while(currentNode != null) {
            sb1.append(currentNode.val);
            currentNode = currentNode.next;
        }

        return sb1.toString().equals(new StringBuilder(sb1).reverse().toString());
    }
}
