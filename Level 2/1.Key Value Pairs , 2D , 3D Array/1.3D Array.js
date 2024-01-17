/*
You are given a 3D Array, of N layers, M Rows, and K columns. you have to take the input
and print the 3D array in the form as mentioned in the test case.
print the 
output = 1 2
         3 4
         5 6
         7 8

*/
let array = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let N = 2;
let M = 2;
let K = 2;
Array3D(N, M, K, array);
function Array3D(N, M, K, array) {
  //Write code here
  for (let layer = 0; layer < N; layer++) {
    for (let row = 0; row < M; row++) {
      let bag = "";
      for (let col = 0; col < K; col++) {
        bag += array[layer][row][col] + " ";
      }
      console.log(bag);
    }
  }
}
