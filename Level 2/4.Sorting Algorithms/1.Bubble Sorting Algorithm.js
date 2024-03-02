let arr = [7, 1, 9, 2, 4, 6, 5, 3];
let n = 8;
console.log(BubbleSorting(arr, n));
function BubbleSorting(arr, n) {
  // Write Code here
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
