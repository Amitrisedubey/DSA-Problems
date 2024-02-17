/*
subarray sum
*/
let arr = [1, 4, 20, 3, 10, 15];
let n = 6;
let sum = 33;
console.log(subArraySum(arr, n, sum));
function subArraySum(arr, n, sum) {
  let windowSum = 0;
  for (let low = 0; low < n; low++) {
    for (let high = 0; high < n; high++) {
      if (windowSum < sum) {
        windowSum += arr[high];
      }
    }
    if (windowSum === sum) {
      return "Yes";
    }
    windowSum = windowSum - arr[low];
  }

  return "No";
}
/*
The algorithm iterates through each element of the array once, both for the outer loop (for (let low = 0; low < n; low++)) and for the inner while loop (while (windowSum < sum && high < n)).
In the worst-case scenario, each element of the array is visited exactly once, resulting in a linear time complexity of O(N).
The space complexity of the solution is O(1), meaning it uses constant extra space.

Here's why:

The algorithm only uses a constant amount of extra space regardless of the size of the input array.
It doesn't use any additional data structures or allocate memory that scales with the size of the input array.
The only variables used are windowSum, low, high, and sum, which occupy constant space.
Therefore, the space complexity of the solution remains O(1).

Overall, the solution is both time and space efficient, making it suitable for practical use cases.
T.C => O(n)
S.C => O(1)

*/
