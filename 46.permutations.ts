/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  if (nums.length === 1) {
    return [nums.slice()];
  }

  for (const i of nums) {
    let n = nums.shift()!;

    let perms = permute(nums);

    for (const perm of perms) {
      perm.push(n);
    }

    perms.forEach((perm) => {
      res.push(perm);
    });

    nums.push(n);
  }

  return res;
}

// @lc code=end
