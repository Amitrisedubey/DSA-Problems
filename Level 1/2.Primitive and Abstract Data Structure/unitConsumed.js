/*
Electricity consumption is measured via slab rates for a particular
wattage capacity , which is as follows
unit consumed => 0-50 => 3 rupees per unit.
unit consumed => 51-150 => 5 rupees per unit.
unit consumed => 150 and above => 10 rupees per unit.
apart from slab rates at a fixed charge of rs 80 is also added to every bill 
you are given total amount of Bill, N you need to find total unit consumed.
input = 930
output = 170
*/
let n = 930;
unitConsumed(n);
function unitConsumed(N) {
  let bill = N - 80;
  let uc;
  if (bill <= 150) {
    uc = bill / 3;
    console.log(uc); // 50 unit
  } else if (bill <= 650) {
    uc = 50 + (bill - 150) / 5;
    console.log(uc); // 50 + 100 = 150 unit
  } else {
    uc = 150 + (bill - 650) / 10;
    console.log(uc); // 50 + 100 + 20 = 170 unit
  }
}
