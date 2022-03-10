// Declaratiion
let titleOne = "Elzero",
  descriptionOne = "Elzero Web School",
  dateOne = "25/10";
let markupOne = `
    <div>
        <h3> Hello ${titleOne}</h3>
        <p>${descriptionOne}</p>
        <span>${dateOne}</span>
    </div>


`;
markupTwo = markupOne.repeat(4);
document.write(markupTwo);
