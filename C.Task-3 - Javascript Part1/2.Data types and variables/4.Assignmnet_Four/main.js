let a = 21;
let b = 20;

console.log(
  "_" +
    a +
    "_" +
    b +
    "" +
    a +
    "_" +
    b +
    "" +
    a +
    "_" +
    b +
    "" +
    a +
    "_" +
    b +
    "_"
); // _21_2021_2021_2021_20_
// or using the literals
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);
