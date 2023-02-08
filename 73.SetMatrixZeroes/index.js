/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeroes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        zeroes.push([i, j]);
      }
    }
  }

  for (const pair of zeroes) {
    let [row, col] = pair;

    matrix[row].fill(0);

    for (let k = 0; k < matrix.length; k++) {
      matrix[k][col] = 0;
    }
  }
};
