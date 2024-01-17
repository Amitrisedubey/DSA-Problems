/*
You are given an array A of n integers K.
find the maximum value of S, such that 
S = a[i]+a[j], and S<K , if no such value exist , then print -1
output = 6
*/

let n = 5;
let array = [1, 2, 3, 4, 5];
K = 7;
console.log(PairLessThan_K(array, n, K));
function PairLessThan_K(array, N, K) {
  //Write code here
  let max = -1;
  for (let i = 0; i < N - 1; i++) {
    let sum;
    for (let j = i + 1; j < N; j++) {
      sum = array[i] + array[j];
      if (sum < K && max < sum) {
        max = sum;
      }
    }
  }
  return max;
}
