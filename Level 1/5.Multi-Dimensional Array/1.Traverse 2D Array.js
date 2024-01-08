let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
traverseArray(arr);
function traverseArray(arr) {
  let row = arr.length;
  let col = arr[0].length;
  for (let i = 0; i < row; i++) {
    let box = "";
    for (let j = 0; j < col; j++) {
      box += arr[i][j] + " ";
    }
    console.log(box);
  }
}
