/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    let iterationNode = list2.val > list1.val ? list1 : list2;
    let currentStackNode = iterationNode === list1 ? list2 : list1;
    let startNode = iterationNode;

    while (currentStackNode !== null) {
        if (iterationNode.next === null || iterationNode.next.val >= currentStackNode.val) {
            let oldPath = iterationNode.next;
            let newStackPath = currentStackNode.next;
            iterationNode.next = currentStackNode;
            currentStackNode.next = oldPath;
            currentStackNode = newStackPath;
        }
        iterationNode = iterationNode.next;
    }
    return startNode;
};
