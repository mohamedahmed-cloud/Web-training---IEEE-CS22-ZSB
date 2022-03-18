let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, counter + true).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(zero + true, counter).reverse()); // ["Elham", "Mazero"]
console.log(
  my[counter - true].slice(zero, counter - true) +
    my[zero + true].slice(zero + true + true)
); // "Elzero"
console.log(
  my[zero + true][counter + true] +
    my[zero + true][counter + true + true].toUpperCase()
); // "rO"
