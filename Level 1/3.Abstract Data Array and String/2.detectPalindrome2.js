detectPalindrome(1221);
function detectPalindrome(num) {
  let rev = 0;
  //1. rev = 1
  //2. rev = 12
  //3. rev = 122
  //4. rev = 1221
  temp = num;
  while (num != 0) {
    let rem = num % 10;
    //1. 1221%10 = 1
    //2.  122%10 = 2
    //3.  12%10 = 2
    //4. 1%10 = = 1
    rev = rev * 10 + rem;
    //1. 0*10+1 = 1
    //2. 1*10+2 = 12
    //3. 12*10+2 = 122
    //4. 122*10+1 = 1221
    num = Math.floor(num / 10);
    //1. 1221/10 = 122.1 floor value = 122
    //2. 122/10 = 12.2  floor value = 12
    //3. 12/10 = 1.2 floor value = 1
    //4. 1/10 = 0.1 floor value = 0
  }
  console.log(rev);
  if (temp == rev) {
    console.log("Yes");
  } else {
    console.log(No);
  }
  console.log(temp);
}
