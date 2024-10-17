/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  let count = new Map();

  nums.forEach((n) => {
    count.set(n, (count.get(n) ?? 0) + 1);
  });

  return [...count.entries()]
    .sort(([, a], [, b]) => b - a)
    .map((i) => i[0])
    .slice(0, k);
}
// @lc code=end
