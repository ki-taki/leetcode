/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
 */

// @lc code=start
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

let inDepth = (node, stack) => {
  if (node === null) return;

  inDepth(node.left, stack);

  stack.push(node.val);

  inDepth(node.right, stack);
};

function kthSmallest(root: TreeNode | null, k: number): number {
  let stack = [];

  inDepth(root, stack);

  return stack[k - 1];
}

// @lc code=end
