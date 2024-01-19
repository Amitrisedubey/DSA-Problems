/*
You are given a matrix of size NxN, find the circular traversal of the matrix
output = 74123698
*/
let size = 3;
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(circularTraversal(arr, size));
function circularTraversal(arr, size) {
  //Write code here
  let ans = "";
  for (let i = size - 1; i >= 0; i--) {
    ans += arr[i][0] + " ";
  }
  for (let i = 1; i < size; i++) {
    ans += arr[0][i] + " ";
  }
  for (let i = 1; i < size; i++) {
    ans += arr[i][size - 1] + " ";
  }
  for (let i = size - 2; i >= 1; i--) {
    ans += arr[size - 1][i] + " ";
  }
  return ans;
}
