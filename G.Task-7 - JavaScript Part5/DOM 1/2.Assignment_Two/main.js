let myElement = document.getElementsByTagName("div");
console.log(myElement.length);
for (let i = 0; i < myElement.length; i++) {
  document.images[i].src =
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  document.images[i].alt = "Elzero Logo";
}
