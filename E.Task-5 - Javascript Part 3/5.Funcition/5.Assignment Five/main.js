// OR I don't understant question so well so i made it on console and document

// function createSelectBox(startYear, endYear) {
//   // Your Code Here
//   console.log(`<div>`);
//   console.log(`<select>`);
//   for (i = startYear; i <= endYear; i++) {
//     console.log(`<option value=${i}>${i}</option>`);
//   }

//   console.log(`</select>`);
//   console.log(`</div>`);
// }
// createSelectBox(2000, 2021);

// OR
function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<div>`);
  document.write(`<select>`);
  for (i = startYear; i <= endYear; i++) {
    document.write(`<option value=${i}>${i}</option>`);
  }

  document.write(`</select>`);
  document.write(`</div>`);
}
createSelectBox(2000, 2021);
