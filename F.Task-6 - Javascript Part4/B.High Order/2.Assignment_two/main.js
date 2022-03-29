let myString = "EElllzzzzzzzeroo";
let finalString = myString
  .split("")
  .filter(function (ele, index, array) {
    return array.indexOf(ele) === index;
  })
  .reduce(function (accum, current) {
    return `${accum}${current}`;
  });
console.log(finalString);
////////////////////////////////////////////////////////////////
/*
we can solve it by set method
*/
let myString2 = "EElllzzzzzzzeroo";
let arr = myString2.split("");
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates(arr).join(""));
