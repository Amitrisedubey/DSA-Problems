/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Sample Input :- 07:05:45PM
Sample Output :- 19:05:45
*/
let S = "07:05:45PM";
timeConversion(S);
function timeConversion(S) {
  let lastTwo = S.substring(8);
  let fullTime = S.substring(0, 8);
  let time = fullTime.split(":");
  if (lastTwo === "PM") {
    if (time[0] !== "12") {
      time[0] = parseInt(time[0]) + 12;
    } else {
      if (time[0] === "12") {
        time[0] = "00";
      }
    }
  }
  console.log(time.join(":"));
}
