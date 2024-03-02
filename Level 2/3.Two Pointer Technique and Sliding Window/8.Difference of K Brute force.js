/*
You are given sorted array A of N size and with another integer K
You have to find if there exist a pair of integer with index i and j 
such that i!=j and A[i]-A[j] == K
if such a pair exist print Yes else print No
output = 
Yes
No
*/
let size = 5;
let k = 3;
let array = [1, 2, 3, 4, 5];
console.log(differnceOfK(array, k, size));
let size2 = 5;
let k2 = 8;
let array2 = [1, 2, 3, 4, 5];
console.log(differnceOfK(array2, k2, size2));
function differnceOfK(arr, k, size) {
  //Write code here
  for (let i = 0; i < size; i++) {
    let diff;
    for (let j = 0; j < size; j++) {
      if (i != j) {
        diff = Math.abs(arr[i] - arr[j]);
        if (diff == k) {
          return "Yes";
        }
      }
    }
  }
  return "No";
}
