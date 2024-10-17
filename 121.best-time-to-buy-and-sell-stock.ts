/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max = 0;
  let l = 0;
  let r = 1;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      if (profit > max) {
        max = profit;
      }
    } else {
      l = r;
    }
    r++;
  }

  return max;
}

// @lc code=end
