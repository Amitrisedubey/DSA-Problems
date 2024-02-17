/*
reverse the string using two poiner
*/
let str = "amit";
console.log(reverseString(str));
function reverseString(str) {
  //Write code here
  let left = 0;
  let right = str.length - 1;
  str = str.split("");
  while (left < right) {
    temp = str[left];
    // console.log((temp = str[left]));
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
  return str.join("");
}
