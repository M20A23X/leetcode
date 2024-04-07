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

function isPalindrome(head: ListNode | null): boolean {
    const values: number[] = [];
    let current: ListNode = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    const valueLastId: number = values.length - 1;
    for (let i = 0; i < valueLastId / 2; i++)
        if (values[i] !== values[valueLastId - i]) return false;
    return true;
};