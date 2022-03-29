let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let finalElzero = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (accum, current) {
    return `${accum}${current}`;
  });
console.log(finalElzero);
// Elzero
