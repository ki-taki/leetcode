/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  let result = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (checkIfExists(board, i, j, word, 0)) {
        result = true;
        break;
      }
    }
  }
  return result;
}

function checkIfExists(
  board: string[][],
  rowIdx: number,
  colIdx: number,
  word: string,
  index: number
): boolean {
  const currentWord = word.charAt(index);
  if (
    rowIdx >= 0 &&
    rowIdx < board.length &&
    colIdx >= 0 &&
    colIdx < board[0].length &&
    board[rowIdx][colIdx] === currentWord
  ) {
    board[rowIdx][colIdx] = "#";
    if (word.length - 1 === index) {
      return true;
    }
    if (
      checkIfExists(board, rowIdx - 1, colIdx, word, index + 1) ||
      checkIfExists(board, rowIdx + 1, colIdx, word, index + 1) ||
      checkIfExists(board, rowIdx, colIdx + 1, word, index + 1) ||
      checkIfExists(board, rowIdx, colIdx - 1, word, index + 1)
    )
      return true;
    else board[rowIdx][colIdx] = currentWord;
  }
  return false;
}
// @lc code=end
