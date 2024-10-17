/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if ("+-*/".includes(tokens[i])) {
      let b = stack.pop();
      let a = stack.pop();
      let result;
      if (tokens[i] == "+") {
        result = a + b;
      } else if (tokens[i] == "-") {
        result = a - b;
      } else if (tokens[i] == "*") {
        result = a * b;
      } else {
        result = Math.trunc(a / b);
      }
      stack.push(result);
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack.pop();
}
// @lc code=end
