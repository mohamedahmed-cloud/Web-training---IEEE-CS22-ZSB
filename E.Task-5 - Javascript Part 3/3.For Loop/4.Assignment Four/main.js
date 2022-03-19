let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  // Write Your Code Here
  if (index === jump) {
    break;
  }
  console.log(index);
  index -= jump;
}
