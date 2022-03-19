let start = 10;
let end = 0;
let stop = 3;
for (let i = 10; i >= 3; i--) {
  if (i.toString().length === 2) {
    console.log(i.toString());
  } else if (i.toString().length === 1) {
    console.log(end.toString() + i);
  }
}
