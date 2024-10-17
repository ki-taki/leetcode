/*
 * @lc app=leetcode id=981 lang=typescript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start
class TimeMap {
  public hash: {};

  constructor() {
    this.hash = {};
  }

  set(key: string, value: string, timestamp: number): void {
    if (key in this.hash) {
      this.hash[key].push({ timestamp, value });
    } else this.hash[key] = [{ timestamp, value }];
  }

  get(key: string, timestamp: number): string {
    if (!(key in this.hash)) return "";
    let timestamps = this.hash[key];
    if (timestamps.length === 0 || timestamps[0].timestamp > timestamp)
      return "";

    let closest = timestamps[0];

    let [l, r] = [0, timestamps.length - 1];

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (timestamps[mid].timestamp === timestamp) return timestamps[mid].value;
      if (timestamps[mid].timestamp < timestamp) closest = timestamps[mid];

      if (timestamps[mid].timestamp < timestamp) l = mid + 1;
      if (timestamps[mid].timestamp > timestamp) r = mid - 1;
    }

    return closest.value;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end
