let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");
div.className = "div";
span.className = "span";
p.className = "p";
section.className = "section";
article.className = "article";
document.addEventListener("click", function (e) {
  if (e.target.className === "div") {
    console.log("This is div ");
  }
  if (e.target.className === "span") {
    console.log("This is span ");
  }
  if (e.target.className === "p") {
    console.log("This is p ");
  }
  if (e.target.className === "article") {
    console.log("This is article ");
  }
  if (e.target.className === "section") {
    console.log("This is section ");
  }
});
