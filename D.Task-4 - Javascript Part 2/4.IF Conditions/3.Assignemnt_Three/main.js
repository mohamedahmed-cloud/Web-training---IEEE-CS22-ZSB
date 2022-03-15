// 3rd Assignment
//Assignment Three"
// Note if can do it by one if condition by i didn't kwon how he want from me to do it by one and the condition is not related "This is not logic"
let num1 = 10;
let num2 = 30;
let num3 = "30";
// console.log(+num3);
if (+num3 > num1 && num3 === num2) {
  console.log(
    `${num3} Is Larger Than ${num1} And Type string Not The Same Type As number`
  );
}
if (+num3 > num1 && num3 == num1 && !(num3 === num1)) {
  console.log(
    `${num3} Is Larger Than ${num1} And Value Is The Same As ${num3} And Type string Not The Same Type As number`
  );
}
if (!(+num3 == num1) && !(num2 === num3)) {
  console.log(
    `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
  );
}
