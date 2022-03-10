let num = 3;

console.log(num + num); //one
console.log(num * (true + true)); //two
console.log(num++ + --num); //three
console.log(++num + --num - true); //four
console.log(++num + ++num - (true + true + true)); //five
num = 3; //to reset value
console.log(num-- + ++num); //six
console.log(num-- + --num + true + true); //seven

//And So On
