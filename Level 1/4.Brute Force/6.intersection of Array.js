/*
you are given 2 Arrays arr1 and arr2 of N
Integers which is common in both (arr1 and arr2)
Note :- There is always one integer common in both array
N = 3
let arr1 = [4,5,7];
let arr2 = [9,2,5];
output = 5
*/
let arr1 = [4, 5, 7];
let arr2 = [9, 2, 5];
let N = 3;
interSectionOfArray(arr1, arr2, N);
function interSectionOfArray(arr1, arr2, size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr1[i] == arr2[j]) {
        console.log(arr1[i]);
      }
    }
  }
}
