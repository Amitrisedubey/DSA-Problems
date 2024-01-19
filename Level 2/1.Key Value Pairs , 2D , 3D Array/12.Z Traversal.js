/*
You are given a matrix of size NxN, find the z traversal of the matrix
output = 1235789
*/
let size = 3;
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(zTraversal(arr, size));
function zTraversal(arr, size) {
  //Write code here
  let op = "";
  for (let i = 0; i < size; i++) {
    op += arr[0][i] + " ";
  }

  //   for (let i = 1, j = 1; i < size, j >= 0; i++, j--) {
  //     op += arr[i][j] + " ";
  //   }
  let i = 1;
  let j = 1;
  while (i < size * 1 && j >= 0) {
    op += arr[i][j] + " ";
    i++;
    j--;
  }
  for (let i = 1; i < size; i++) {
    op += arr[size - 1][i] + " ";
  }
  return op;
}
