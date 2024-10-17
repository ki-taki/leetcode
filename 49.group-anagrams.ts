/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const hash: Map<string, string[]> = new Map();

  for (const string of strs) {
    const sorted = string.split("").sort().join();
    if (hash.has(sorted)) {
      hash.get(sorted)!.push(string);
    } else {
      hash.set(sorted, [string]);
    }
  }

  return [...hash.values()];
}
// @lc code=end
