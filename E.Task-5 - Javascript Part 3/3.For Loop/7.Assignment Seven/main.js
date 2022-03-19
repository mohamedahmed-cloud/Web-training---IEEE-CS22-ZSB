let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = start; i < mix.length; i++) {
  if (mix[i] === 1) {
    continue;
  } else if (typeof mix[i] === "string") {
    continue;
  } else {
    console.log(mix[i]);
  }
}
