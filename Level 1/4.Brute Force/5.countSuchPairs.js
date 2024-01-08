//sum of arr[i] +arr[j] == K
let arr = [3, 0, 6, 2, 7];
let N = 5;
let K = 9;
countSuchPairs(arr, N, K);
function countSuchPairs(arr, N, K) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (arr[i] + arr[j] == K) {
        count++;
      }
    }
  }
  console.log(count);
}
