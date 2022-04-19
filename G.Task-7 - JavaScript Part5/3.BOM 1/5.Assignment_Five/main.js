let div = document.querySelector("div");
let count = setInterval(counter, 1000);
function counter() {
  div.innerHTML -= 1;
  if (div.innerHTML === "5") {
    document.open("https://elzero.org/", "", "height=300,width=400");
    clearInterval(count);
  }
}
