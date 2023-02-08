/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const phrase = s.replaceAll(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversed = phrase.split("").reverse().join("");

  return phrase === reversed;
};
