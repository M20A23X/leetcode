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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let current: ListNode = head;
    let currentId = 1;
    let counter: ListNode = head;
    let count = 1;

    while (counter.next) {
        count++;
        counter = counter.next;
    }

    if (count === n)
        head = head.next

    while (current.next) {
        if (currentId === count - n) {
            if (current?.next?.next)
                current.next = current.next.next;
            else current.next = null;
            break;
        }
        current = current.next;
        currentId++;
    }

    return head;
};