/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const length = nums.length
    return length !== new Set([...nums]).size
};
// @lc code=end
