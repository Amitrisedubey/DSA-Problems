/*
You are given an two Arrays A and B each of size N 
the first array is sorted in ascending order hwile the second is sorted 
in decreasing order 
you have to find the numbers of elements common in both the arrays 
try to solve this without using any extra spaces.
output = 4
output = 1 
*/
let arr1 = [1, 2, 2, 3, 4, 5];
let arr2 = [4, 4, 3, 2, 1, 1];
let N = 6;
console.log(twoSortedArrays(arr1, arr2, N));
function twoSortedArrays(array1, array2, N) {
  //Write code here
  let count = 0;
  let left = 0;
  let right = N - 1;
  while (left < N - 1 && right >= 0) {
    if (array1[left] == array2[right]) {
      count++;
      left++;
      right--;
    } else if (array1[left] > array2[right]) {
      right--;
    } else {
      left++;
    }
  }
  return count;
}

/*
Time Complexity = O(N)
Space Complexity = O(1)
*/
