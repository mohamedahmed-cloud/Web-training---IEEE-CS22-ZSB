let font_family = document.getElementById("font_family");
let mycolor = document.getElementById("color");
let fontsize = document.getElementById("FontSize");

let workplace = document.querySelector(".mytxt");

// for color if reloaded
if (window.localStorage.getItem("colour")) {
  workplace.style.color = window.localStorage.getItem("colour");
  mycolor.value = window.localStorage.getItem("colour");
}

// for font family if reloaded
if (window.localStorage.getItem("Font family")) {
  workplace.style.font_family = window.localStorage.getItem("Font family");
  font_family.value = window.localStorage.getItem("Font family");
}

// for font size if reloaded
if (window.localStorage.getItem("font size")) {
  workplace.style.fontSize = window.localStorage.getItem("font size");
  fontsize.value = window.localStorage.getItem("font size");
}

// to change font family
font_family.addEventListener("change", function (e) {
  workplace.font_family = e.currentTarget.value;

  window.localStorage.setItem("Font family", e.currentTarget.value);
});

// to change colour
mycolor.addEventListener("change", function (e) {
  workplace.style.color = e.currentTarget.value;

  window.localStorage.setItem("colour", e.currentTarget.value);
});

// font size
fontsize.addEventListener("change", function (e) {
  workplace.style.fontSize = e.currentTarget.value;

  window.localStorage.setItem("font size", e.currentTarget.value);
});