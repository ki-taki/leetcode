/*
 * @lc app=leetcode id=211 lang=typescript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start
class TrieNode {
  children: { [key: string]: TrieNode };
  endOfWord: boolean;
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let cur = this.root;

    for (const c of word) {
      if (!(c in cur.children)) {
        cur.children[c] = new TrieNode();
      }
      cur = cur.children[c];
    }
    cur.endOfWord = true;
  }

  search(word: string): boolean {
    function dfs(j: number, root: TrieNode): boolean {
      let cur = root;

      for (let i = j; i < word.length; i++) {
        const c = word[i];

        if (c === ".") {
          for (const key in cur.children) {
            if (Object.prototype.hasOwnProperty.call(cur.children, key)) {
              const child = cur.children[key];
              if (dfs(i + 1, child)) {
                return true;
              }
            }
          }
          return false;
        } else {
          if (!(c in cur.children)) {
            return false;
          }
          cur = cur.children[c];
        }
      }

      return cur.endOfWord;
    }
    return dfs(0, this.root);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
