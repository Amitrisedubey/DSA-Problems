/*
Frequency-drome is defined as a string which when split in the middle, 
gives two halves having the same characters and same frequency of each 
character. if there are odd number of characters in the string. we ignore the middle character and check 
for frequency-drome. 
gaga is a frequency-drome , since the two halves ga and ga have the same characters
with the same frequency . Also abccab,rotor and xyzxy are a few examples of frequency-dromes .
Note that abbaab is Not a frequency-drome . The two halves contain the same characters but their 
frequencies do not match your task is simple Given a string ,you need to tell it is a frequency drome
*/
let str = "abbab";
let n = 5;
console.log(frequencyDrome(str, n));
let str2 = "bbabbabab";
let n2 = 9;
console.log(frequencyDrome(str2, n2));
let str3 = "bbaabbaa";
let n3 = 8;
console.log(frequencyDrome(str3, n3));
function frequencyDrome(str, n) {
  //Write code here
  let obj = {};
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] += 1;
    }
  }
  for (let i = Math.ceil(n / 2); i < n; i++) {
    if (obj[str[i]] === undefined) {
      return "No";
    } else {
      obj[str[i]] -= 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 0) {
      return "Yes";
    } else {
      return "No";
    }
  }
  //return obj;
}
