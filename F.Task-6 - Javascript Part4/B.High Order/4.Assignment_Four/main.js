let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let final = numsAndStrings
  .filter(function (element) {
    return isNaN(Number.parseInt(element)) ? "" : element;
  })
  .map(function (element) {
    return -element;
  });
console.log(final);
// [-1, -10, 10, 20, -5, -3]
