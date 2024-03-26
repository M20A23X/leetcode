/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function traverse(node: TreeNode | null, values: number[]): void {
    if (!node) return;
    traverse(node.left, values);
    values.push(node.val);
    traverse(node.right, values);
};

function inorderTraversal(root: TreeNode | null): number[] {
    const values: number[] = [];
    traverse(root, values);
    return values;
};