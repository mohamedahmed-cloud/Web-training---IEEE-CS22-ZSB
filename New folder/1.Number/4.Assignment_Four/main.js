let myVar = "100.56789 Views";
let myNum = parseFloat(myVar);
console.log(Math.floor(myNum)); // 100
console.log(Math.trunc(myNum)); // 100

console.log(+myNum.toFixed(2)); // 100.57
