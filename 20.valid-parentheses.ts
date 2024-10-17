/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const hash: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack: string[] = [];

  for (const char of s) {
    if (char in hash) stack.push(char);
    else {
      const top = stack.pop();
      if (top === undefined || hash[top] !== char) {
        return false;
      }
    }
  }

  return !stack.length;
}
// @lc code=end
