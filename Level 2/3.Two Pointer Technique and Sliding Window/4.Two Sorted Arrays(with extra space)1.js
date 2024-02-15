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
arr3 = [1, 1, 1, 2, 2, 2];
arr4 = [2, 2, 2, 3, 3, 3];
let N2 = 6;
console.log(twoSortedArrays(arr3, arr4, N2));
function twoSortedArrays(array1, array2, N) {
  //Write code here
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < N; i++) {
    if (obj1[array1[i]] === undefined) {
      obj1[array1[i]] = 1;
    } else {
      obj1[array1[i]] += 1;
    }
  }
  for (let i = 0; i < N; i++) {
    if (obj2[array2[i]] === undefined) {
      obj2[array2[i]] = 1;
    } else {
      obj2[array2[i]] += 1;
    }
  }
  let count = 0;
  for (let key in obj1) {
    if (obj2[key]) {
      count++;
      delete obj2[key];
    }
  }
  return count;
}

/*
Time Complexity = O(N)
Space Complexity = O(N)
*/
