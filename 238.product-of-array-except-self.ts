/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = new Array(n);
  let product = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= product;
    product *= nums[i];
  }
  return ans;
}
// @lc code=end
