/*
 * @lc app=leetcode id=1448 lang=typescript
 *
 * [1448] Count Good Nodes in Binary Tree
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

function goodNodes(root: TreeNode | null): number {
  // edge case
  if (root === null) return 0;

  //keep track of the count
  let count = 0;

  const dfs = (root, max) => {
    //if value is bigger than max of path, then it is a good node
    if (root.val >= max) count++;

    //extend search to children if not null with updated max(takes current node in consideration too)
    if (root.left !== null) dfs(root.left, Math.max(max, root.val));
    if (root.right !== null) dfs(root.right, Math.max(max, root.val));
  };

  //starts with negative max value, because min value is just the smaller positive value in javascript
  dfs(root, -Number.MAX_VALUE);

  return count;
}

// @lc code=end
