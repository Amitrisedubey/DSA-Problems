/*
You are in charge of the cake for a child's birthday. You have decided the cake 
will have one candle for each year of their total age. They will only be able 
to blow out the tallest of the candles. Count how many candles are tallest.
let candles = [3, 2, 1, 3];
The maximum height candles are 3 units high. There are 2 of them, so return 2.
*/
let candles = [3, 2, 1, 3];
birthdayCakeCandles(candles);
function birthdayCakeCandles(candles) {
  let maxCandle = candles[0];
  for (let i = 0; i < candles.length; i++) {
    if (maxCandle < candles[i]) {
      maxCandle = candles[i];
    }
  }
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxCandle) {
      count++;
    }
  }
  console.log(count);
}
