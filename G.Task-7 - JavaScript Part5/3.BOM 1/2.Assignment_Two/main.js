let divBig = document.querySelector("div");
window.onload = function () {
  divBig.style.backgroundColor = "#F0F0F0";
  divBig.style.textAlign = "center";
  divBig.style.display = "inline-block";
  divBig.style.backgroundPosition = "center center";
  divBig.style.padding = "50px";
  divBig.style.position = "absolute";
  divBig.style.top = "36%";
  divBig.style.left = "38%";
  divBig.style.display = "none";
};
window.onclick = function () {
  //   divBig.style.display = "block";
  if (divBig.style.display === "none") {
    divBig.style.display = "block";
  } else {
    divBig.style.display = "none";
  }
};
