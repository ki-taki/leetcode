/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  let minL = 0;
  let minR = s.length;

  const tCount = {};
  let needed = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] in tCount) tCount[t[i]]++;
    else {
      tCount[t[i]] = 1;
      needed++;
    }
  }

  const winCount = {};
  let matched = 0;

  let l = 0;

  for (let r = 0; r < s.length; r++) {
    if (s[r] in winCount) winCount[s[r]]++;
    else winCount[s[r]] = 1;
    if (s[r] in tCount && winCount[s[r]] === tCount[s[r]]) matched++;

    while (matched === needed) {
      if (r - l + 1 < minR - minL + 1) {
        minL = l;
        minR = r;
      }

      if (s[l] in tCount && winCount[s[l]] === tCount[s[l]]) matched--;
      winCount[s[l]]--;
      if (winCount[s[l]] === 0) delete winCount[s[l]];
      l++;
    }
  }

  return minR - minL + 1 > s.length ? "" : s.slice(minL, minR + 1);
}

// @lc code=end
