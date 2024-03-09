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

function hasCycle(head: ListNode | null): boolean {
    let currentNodeRunner = head;
    let currentNodeWalker = head;
    while (currentNodeRunner?.next && currentNodeRunner) {
        currentNodeWalker = currentNodeWalker?.next;
        currentNodeRunner = currentNodeRunner?.next?.next;
        if (currentNodeRunner === currentNodeWalker) return true;
    }
    return false;
};
