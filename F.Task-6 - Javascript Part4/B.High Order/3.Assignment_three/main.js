// First one
let myArray = ["E", "l", "z", ["e", "r"], "o"];
console.log(
  myArray.slice(0, 3).join("") +
    myArray[3].join("") +
    myArray.slice(4, 6).join("")
);
// Second one

let myArray2 = ["E", "l", "z", ["e", "r"], "o"];
a = myArray2.join("");
b = a.split(",");
c = b.join("");
console.log(c);

// Thrid One

let final = myArray2.reduce(function (ele, cur) {
  return cur !== "," || ele !== "," ? `${ele}${cur}` : "";
});
final = final.replace(",", "");
console.log(final);
// Elzero
