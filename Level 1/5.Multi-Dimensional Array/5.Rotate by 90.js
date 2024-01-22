/*
Given a square marix of size N , turn it by 90 degree in an anti clockwise 
direction
output = [
  [4,8,4,8],
  [3,7,3,7],
  [2,6,2,6],
  [1,5,1,5],
]
*/
let N = 4;
let Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
console.log(rotateBy90(Matrix, N));
function rotateBy90(Matrix, size) {
  //Write code here
  for (let i = 0; i < size / 2; i++) {
    for (let j = i; j < size - i - 1; j++) {
      let temp = Matrix[i][j];
      Matrix[i][j] = Matrix[j][size - i - 1];
      Matrix[j][size - i - 1] = Matrix[size - i - 1][size - j - 1];
      Matrix[size - i - 1][size - j - 1] = Matrix[size - j - 1][i];
      Matrix[size - j - 1][i] = temp;
    }
  }

  return Matrix;
}
