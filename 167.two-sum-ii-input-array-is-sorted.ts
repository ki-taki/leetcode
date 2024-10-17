/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let L = 0;
  let R = numbers.length - 1;

  while (numbers[L] + numbers[R] !== target) {
    if (numbers[L] + numbers[R] > target) {
      R = R - 1;
    } else if (numbers[L] + numbers[R] < target) {
      L = L + 1;
    }
  }

  return [L + 1, R + 1];
}
// @lc code=end
