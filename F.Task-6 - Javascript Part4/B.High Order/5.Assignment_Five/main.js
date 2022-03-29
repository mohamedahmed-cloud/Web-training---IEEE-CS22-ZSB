let nums = [2, 12, 11, 5, 10, 1, 99];
let final = nums.reduce(function (accum, curr) {
  return curr % 2 === 0 ? accum * curr : accum + curr;
}, 1);
console.log(final);
