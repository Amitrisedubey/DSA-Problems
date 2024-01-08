/*
For all numbers in the range [1,N], includung N you have to print a string as per the following rules:
=> Print Chennai Super Kings , if the number is a multilple of both 5 and 7.
=> Print Chennai, if the number is a multilple of 7 only.
=> Print Super, if the number is a multilple of 5 only.
=> Else in all other cases print Kings!
let N = 7
*/
let N = 7;
chennaiSuperKings(N);
function chennaiSuperKings() {
  for (let i = 1; i <= N; i++) {
    if (i % 5 == 0 && i % 7 == 0) {
      console.log("Chennai Super kings");
    } else if (i % 7 == 0) {
      console.log("Chennai");
    } else if (i % 5 == 0) {
      console.log("Super");
    } else {
      console.log("Kings");
    }
  }
}
/* output = Kings
Kings;
Kings;
Kings;
Super;
Kings;
Chennai;
*/
