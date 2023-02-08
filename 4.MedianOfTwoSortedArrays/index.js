/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let median;

  let arr = [...nums1, ...nums2].sort((a, b) => a - b);

  if (arr.length % 2 === 0) {
    let mid = arr.length / 2;
    median = (arr[mid - 1] + arr[mid]) / 2;
  } else {
    let mid = Math.ceil(arr.length / 2);
    median = arr[mid - 1];
  }

  return median;
};
