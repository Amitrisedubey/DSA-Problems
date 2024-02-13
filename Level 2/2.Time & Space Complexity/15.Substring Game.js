/*
You are given a string str of size N
You have to find the count of all the substring of the strings such
that the there at least two consecutive vowel in the string consider the string aac them all of the given string are
a
aa
aac
output = 2

Input =cdea
output = 3
*/
let str = "cdea";
let n = 4;
console.log(substringGame(str, n));
let str2 = "abcde";
let n2 = 5;
console.log(substringGame(str2, n2));
function substringGame(str, n) {
  //write code here
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i; j < n; j++) {
      if (checkconsecutive(str[j]) && checkconsecutive(str[j + 1])) {
        count++;
      }
    }
  }
  return count;
}
function checkconsecutive(substring) {
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowel.length; i++) {
    if (vowel[i] == substring) {
      return true;
    }
  }
  return false;
}
