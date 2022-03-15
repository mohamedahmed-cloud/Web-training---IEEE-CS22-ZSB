let c = 10;
let a = 20;
let b = 30;

console.log((a < b && a > c) || a > b); // true
console.log(a < b < a < c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
