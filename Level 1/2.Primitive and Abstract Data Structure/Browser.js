let browser = [];
let forwardArray = [];
//visit website
function visit(input) {
  console.log("Visit");
  browser.push(input);
  console.log("Browser:-" + browser);
  let currentPage = browser[browser.length - 1];
  console.log("Current Page:-" + currentPage);
  console.log("\n");
}
function backButton() {
  console.log("Back");
  let back = browser.pop();
  forwardArray.push(back);
  console.log("Forward Page:-" + forwardArray);
  console.log("Browser:-" + browser);
  let currentPage = browser[browser.length - 1];
  console.log("Current Page:-" + currentPage);
  console.log("\n");
}
function forwardButton() {
  if (forwardArray !== 0) {
    console.log("Back");
    let back = forwardArray.pop();
    browser.push(back);
    console.log("Forward Page:-" + forwardArray);
    console.log("Browser:-" + browser);
    let currentPage = browser[browser.length - 1];
    console.log("Current Page:-" + currentPage);
    console.log("\n");
  }
}
visit("www.google.com");
visit("www.facebook.com");
visit("www.linkedin.com");
backButton();
forwardButton();
