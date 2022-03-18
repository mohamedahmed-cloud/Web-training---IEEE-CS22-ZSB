let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
// console.log(arrOne.concat(arrTwo));
// Write One Single Line Of Code

console.log(
  finalArr.concat(
    arrTwo[arrOne.length - true],
    arrOne.reverse(),
    arrTwo.slice(finalArr.length, arrTwo.length - true).reverse()
  )
); //["Z", "X", "D", "C", "B", "A"]
