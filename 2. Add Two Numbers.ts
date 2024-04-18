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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let resultList = new ListNode();
    let p1: ListNode = l1;
    let p2: ListNode = l2;
    let pr: ListNode = resultList;
    let mem = 0;
    while (p1 || p2 || mem) {
        const sum = (p1?.val || 0) + (p2?.val || 0) + mem;
        pr.val = sum % 10;
        mem = Math.trunc(sum / 10);
        p1 = p1?.next;
        p2 = p2?.next;
        if (p1 || p2 || mem)
            pr.next = new ListNode();
        pr = pr.next;
    }
    return resultList;
};