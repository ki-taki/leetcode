/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  let stack = [];

  let result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    let currTemp = temperatures[i];

    while (stack.length > 0 && currTemp > stack[stack.length - 1].temp) {
      let { ind } = stack.pop();
      result[ind] = i - ind;
    }

    stack.push({ temp: currTemp, ind: i });
  }

  return result;
}

// @lc code=end
