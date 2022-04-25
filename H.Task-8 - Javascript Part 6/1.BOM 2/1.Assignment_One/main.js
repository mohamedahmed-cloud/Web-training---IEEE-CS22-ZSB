let font = document.querySelector(".fonts");
let color = document.querySelector(".colors");
let fontWeigth = document.querySelector(".fontweight");
let myP = document.querySelector("p");

// Set valu
window.localStorage.clear();

window.localStorage.setItem("fontFamily", "Cairo");
window.localStorage.setItem("color", "red");
window.localStorage.setItem("fontWeight", "16");

// for Font Family
// didn't work any way
// For color
if(window.localStorage.getItem("color")){
    window.localStorage.setItem("color",)
}
