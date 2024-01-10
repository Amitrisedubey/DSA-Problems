/*
You are given an array matrix of n rows and m columns which
contains lower case English Letters.
how many times does the phrase "saba" appear horizontaly,verticaly and diagonaly in the grid? 
output = 2
*/
let matrix = [
  ["s", "a", "b", "a"],
  ["a", "a", "a", "b"],
  ["a", "b", "b", "s"],
  ["b", "a", "s", "a"],
];
let row = 4;
let col = 4;
let S = "saba";
console.log(twoArrayAndPhrase(matrix, row, col, S));
function twoArrayAndPhrase(matrix, row, col, S) {
  //Write code here
  let count = 0;
  let bag;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      //Horizontaly
      if (j < col - 3) {
        bag =
          matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] + matrix[i][j + 3];
        if (bag === S) {
          count++;
        }
      }
      //Vertically
      if (i < row - 3) {
        bag =
          matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j] + matrix[i + 3][j];
        if (bag === S) {
          count++;
        }
      }
      //Diagonal Downward
      if (i < row - 3 && j < col - 3) {
        bag =
          matrix[i][j] +
          matrix[i + 1][j + 1] +
          matrix[i + 2][j + 2] +
          matrix[i + 3][j + 3];
        if (bag === S) {
          count++;
        }
      }
      //Diagonal upward
      if (i > 2 && j < col - 3) {
        bag =
          matrix[i][j] +
          matrix[i - 1][j + 1] +
          matrix[i - 2][j + 2] +
          matrix[i - 3][j + 3];
        if (bag === S) {
          count++;
        }
      }
    }
  }
  return count;
}
