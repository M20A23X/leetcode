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
    if (!list1) return list2;
    if (!list2) return list1;
    let [p1, p2] = (list1?.val < list2?.val ? [list1, list2] : [list2, list1]);
    const result: ListNode = p1;
    while (p1 && p2) {
        if (p1.val <= p2.val && (p2.val <= p1.next?.val || p1.next?.val === undefined)) {
            const p1n = p1.next;
            p1.next = new ListNode(p2.val, p1n);
            p1 = p1.next;
            p2 = p2.next;
        } else p1 = p1.next;
    }
    if (p2)
        p1.next = p2;
    return result;
};