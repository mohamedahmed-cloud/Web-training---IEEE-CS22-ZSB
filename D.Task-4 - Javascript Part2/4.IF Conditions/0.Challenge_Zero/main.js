/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
console.log(
  a < 10 ? 10 : a >= 10 && a <= 40 ? "10 To 40" : a > 40 ? "> 40" : "Unknown"
);

let st = "Elzero Web School";

// W Position May Change
// 1
if (st[st.indexOf("W")].toLowerCase() === "w") {
  console.log("Good");
}
// 2
if (st.indexOf("E") !== "string") {
  console.log("Good");
}
// 3
if (typeof st.indexOf("E") === "number") {
  console.log("Good");
}
// 4
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
// 5
if ((st.length * 2).toFixed(0) === "34") {
  console.log("Good");
}
// or using to string
if ((st.length * 2).toString() === "34") {
  console.log("Good");
}
