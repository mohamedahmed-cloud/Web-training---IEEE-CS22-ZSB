let div = document.querySelector("div");
let count = setInterval(counter, 1000);
function counter() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    location.href = "https://elzero.org/";
  }
}
