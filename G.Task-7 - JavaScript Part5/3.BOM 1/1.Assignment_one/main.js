let myProm = prompt("Print Number From – To", "Example: 5-20");
// console.log(myProm);
let newProm = myProm.split("-");

// console.log(newProm);
let less = parseInt(newProm[0]);
let more = parseInt(newProm[1]);
// console.log(less);
// console.log(more);
// let div = document.querySelector("div");
// // console.log(div);

if (less < more) {
  for (let i = 5; i <= 20; i++) {
    console.log(i);
  }
} else {
  for (let i = more; i <= less; i++) {
    console.log(i);
  }
}
