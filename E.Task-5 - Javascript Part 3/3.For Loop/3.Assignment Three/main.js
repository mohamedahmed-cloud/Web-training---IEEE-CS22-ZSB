let start = 1;
let end = 6;
let breaker = 2;
for (let i = start; i <= end; i++) {
  console.log(i);
  for (let j = breaker; j < end; j += breaker) {
    console.log(` -- ${j}`);
  }
}
