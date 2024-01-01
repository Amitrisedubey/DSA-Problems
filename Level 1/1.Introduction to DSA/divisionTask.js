/*
you are given a number N.
let's say you derive a variable x which is equal to the floor 
of a number you get when 32 is divided by N
=> In case x is 0, Print Too low
=> In case it is not possible to generate a valid number , Print -1
=> In all other cases , Print x.
input = 4
output = 8
*/
let N = 4;
DivisionTask(N);
function DivisionTask(N) {
  let x = Math.floor(32 / N);
  if (x == 0) {
    console.log("Too Low");
  } else if (N === 0) {
    console.log(-1);
  } else {
    console.log(x);
  }
}
