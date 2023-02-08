/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return (
    word.toUpperCase() === word ||
    word.toLowerCase() === word ||
    word[0].toUpperCase() + word.substring(1).toLowerCase() === word
  );
};
