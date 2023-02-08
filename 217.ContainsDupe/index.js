/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numsSet = new Set(nums);

  if (numsSet.size === nums.length) {
    return false;
  } else {
    return true;
  }
};
