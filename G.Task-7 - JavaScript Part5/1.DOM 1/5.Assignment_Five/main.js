let element = document.getElementsByTagName("img");
console.log(element.length);
for (let i = 0; i < element.length; i++) {
  if (element[i].alt === "") {
    element[i].alt = "Elzero New";
    console.log(element[i]);
  } else {
    element[i].alt = "Old";
    console.log(element[i]);
  }
}
