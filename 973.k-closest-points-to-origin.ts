/*
 * @lc app=leetcode id=973 lang=typescript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
function kClosest(points: number[][], k: number): number[][] {
  const maxQ = new MaxPriorityQueue();
  for (const [x, y] of points) {
    const dist = x * x + y * y;
    maxQ.enqueue([x, y], dist);
    if (maxQ.size() > k) {
      maxQ.dequeue();
    }
  }
  return maxQ.toArray().map((item) => item.element);
}
// @lc code=end
