/*
L is a famous detective in the anime series Death Note and is known for solving puzzles 
and riddles for investigation .
there is a security breach in tokyo police and they want L's help. 
he is given the security matrix of dimension [nxm] by the police .
L decodes that his rival Light has breached the security matrix and has 
followed a specific way of accesing the matrix. L shape 
He is busy with some other clients and he knows you can decode this 
traversal and print the traversal in the single line 
output =>
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
*/
let matrix = [
  [1, 9, 15, 19, 20],
  [2, 10, 16, 17, 18],
  [3, 11, 12, 13, 14],
  [4, 5, 6, 7, 8],
];
let row = 4;
let col = 5;
console.log(detectiveL(matrix, row, col));
function detectiveL(matrix, row, col) {
  //Write code here
  console.log(col);
  let top = 0;
  let bottom = row - 1;
  let left = 0;
  let right = col - 1;
  let res = "";
  let count = 0;
  while (count < row * col) {
    for (let i = top; i <= bottom; i++) {
      res += matrix[i][left] + " ";
      count++;
    }
    left++;
    if (count >= row * col) break;
    for (let i = left; i <= right; i++) {
      res += matrix[bottom][i] + " ";
      count++;
    }
    bottom--;
  }
  console.log(count);
  return res;
}
