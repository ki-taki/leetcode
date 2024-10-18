/*
 * @lc app=leetcode id=212 lang=typescript
 *
 * [212] Word Search II
 */

// @lc code=start
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  word: string = "";
}

class Trie {
  root: TrieNode = new TrieNode();
  insert = (word: string): void => {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
    }
    node.word = word; // store in the leaf node
  };
}

function findWords(board: string[][], words: string[]): string[] {
  const ret: string[] = [];
  const M = board.length;
  const N = board[0].length;
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  const backtracking = (i: number, j: number, node: TrieNode): void => {
    if (node.word !== "") {
      ret.push(node.word);
      node.word = ""; // de-dup
    }
    if (i < 0 || j < 0 || i >= M || j >= N) return; // boundary

    const cur = board[i][j];
    if (!node.children.has(cur)) return;

    node = node.children.get(cur);
    board[i][j] = "";
    backtracking(i + 1, j, node);
    backtracking(i, j + 1, node);
    backtracking(i - 1, j, node);
    backtracking(i, j - 1, node);
    board[i][j] = cur;
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      backtracking(i, j, trie.root);
    }
  }

  return ret;
}
// @lc code=end
