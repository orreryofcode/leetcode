/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const preVal = new Map();

  const twoSum = [];

  nums.forEach((val, idx) => {
    let diff = target - val;

    if (preVal.has(diff)) {
      twoSum.push(preVal.get(diff));
      twoSum.push(idx);
    }

    preVal.set(val, idx);
  });

  return twoSum;
};
