/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let lastletter = myString[myString.length - true];
let solution = myString
  .split("")
  .filter(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .filter(function (element) {
    return element !== "," && element !== lastletter;
  })
  .map(function (element) {
    return element.replace("_", " ");
  })
  .reduce(function (accum, current) {
    return accum === current ? `${accum}` : `${accum}${current}`;
  });

console.log(solution); // Elzero Web School

// let varible = "ElzeroWebSchool";
// let varible2 = varible.split("");
// let solution = myString
//   .split(",")
//   .filter(function (element) {
//     return isNaN(parseInt(element)) ? element : "";
//   }).
//   .map(function (result, index) {
//     return varible2[index] === result ? result : "";
