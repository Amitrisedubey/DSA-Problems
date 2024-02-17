/*
You are given a string of size N , you have to convert the string into its cipher form
for example the cipher form of a string "aabccd", will be a2b1c2d1. The new generated string contains the characters
and the count of their occurences in a consecutive manner
*/
let str = "aabcc";
let n = 5;
console.log(cipherString(str, n));
let str2 = "aazaa";
let n2 = 5;
console.log(cipherString(str2, n2));
function cipherString(str, n) {
  //Write code here
  let res = "";
  let count = 1;
  for (let i = 0; i < n; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      res += str[i] + count;
      count = 1;
    }
  }
  return res;
}
