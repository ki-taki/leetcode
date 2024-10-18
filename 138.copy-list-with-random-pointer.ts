/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  let hash = new Map<Node, Node>();

  let newHead = new Node(0);

  let itr = head;

  let itrN = newHead;

  while (itr !== null) {
    let newN = new Node(itr.val);
    itrN.next = newN;
    itrN = newN;
    hash.set(itr, newN);

    itr = itr.next;
  }

  itr = head;
  while (itr !== null) {
    let inNew = hash.get(itr);
    if (itr.random !== null) {
      let inNewRand = hash.get(itr.random);
      inNew.random = inNewRand;
    }
    itr = itr.next;
  }

  return newHead.next;
}

// @lc code=end
