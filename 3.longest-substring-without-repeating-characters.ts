/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set();
  let l = 0;
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l += 1;
    }
    charSet.add(s[r]);
    res = Math.max(res, r - l + 1);
  }
  return res;
}

// @lc code=end
