/*
Description:- Given ,Matrix of size n by n. Traverse and print the 
matrix in spiral form
output = 1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2
*/
let size = 4;
let Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
console.log(spirallyTraversal(Matrix, size));
function spirallyTraversal(Matrix, N) {
  //Write code Here
  let top = 0,
    bottom = N - 1,
    left = 0,
    right = N - 1;
  let temp = "";
  let count = 0;
  while (count < N * N) {
    //left = 0 right = 3
    //left = 1 right = 2
    for (let i = left; i <= right; i++) {
      temp += Matrix[top][i] + " ";
      count++;
    }
    top++;
    // top = 1 , bottom = 3
    for (let i = top; i <= bottom; i++) {
      temp += Matrix[i][right] + " ";
      count++;
    }
    right--;
    // right = 2 , left = 0
    for (let i = right; i >= left; i--) {
      temp += Matrix[bottom][i] + " ";
      count++;
    }
    bottom--;
    // bottom = 2 , top = 1
    for (let i = bottom; i >= top; i--) {
      temp += Matrix[i][left] + " ";
      count++;
    }
    left++;
  }
  console.log(count);
  return temp;
}
