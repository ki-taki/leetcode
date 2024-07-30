/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    // if (s.length !== t.length) {
    //     return false;
    // }
    // const count: { [key: string]: number} = {};
    // for (const char of s) {
    //     count[char] = (count[char] || 0) + 1;
    // }
    // for (const char of t) {
    //     if (!count[char]) {
    //         return false;
    //     }
    //     count[char]--;
    // }

    // return true;
    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");

    return sortedS === sortedT
};
// @lc code=end

