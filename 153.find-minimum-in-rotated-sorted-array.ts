/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  while (right > left) {
    let midIdx: number = Math.floor((left + right) / 2);
    if (nums[midIdx] > nums[right]) {
      left = midIdx + 1;
    } else {
      right = midIdx;
    }
  }
  return nums[left];
}

// @lc code=end
