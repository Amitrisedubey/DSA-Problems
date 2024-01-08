/*
You are given an array A with N elements you are followed to remove only remove one element.
which makes the sum of all the remaining element exactly divisible by 7.
your task is to find the first index of smallest element that can be removed from array .
if there is no answer Print -1
N = 5
arr = [14,7,8,2,4]
output = 1
*/
let arr = [14, 7, 8, 2, 4];
let N = 5;
applyBasicMath(arr, N);
function applyBasicMath(arr, N) {
  let min = Infinity;
  let index = -1;
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        //console.log(arr[j]);
        sum += arr[j];
      }
    }
    if (sum % 7 == 0 && arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  console.log(index);
}
