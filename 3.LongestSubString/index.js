/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const strArr = [];
  var max = 0;

  for (let i = 0; i < s.length; i++) {
    if (!strArr.includes(s[i])) {
      strArr.push(s[i]);
      max = Math.max(max, strArr.length);
    } else if (strArr.includes(s[i])) {
      i = i - strArr.length;
      max = Math.max(max, strArr.length);
      strArr.length = 0;
    }
  }

  return max;
};
