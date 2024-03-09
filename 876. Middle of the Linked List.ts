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

function middleNode(head: ListNode | null): ListNode | null {
    let nodeRunner = head;
    let nodeWalker = head;
    while (nodeWalker && nodeRunner?.next) {
        nodeWalker = nodeWalker.next;
        nodeRunner = nodeRunner.next?.next;
    }
    return nodeWalker;
};
