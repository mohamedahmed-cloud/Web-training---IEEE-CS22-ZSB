// Query Selector
// 1st,2nd,3rd,4th
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("div"));
console.log(document.querySelector("[name='js']"));

// QuerySelectorAll
// 5th,6th,7th,8th
console.log(document.querySelectorAll(".element"));
console.log(document.querySelectorAll("#elzero"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("[name='js']"));

// 9th,10th,11th,12th
console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element"));
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByName("js"));
