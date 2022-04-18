let myP = document.querySelector("p");
myP.remove();
let myDiv = document.querySelector("div");
let element1 = document.createElement("div");
let element2 = document.createElement("div");

/* <div class="start" title="Start Element" data-value="Start">Start</div>
<div class="our-element">Our Element</div>
<div class="end" title="End Element" data-value="End">End</div>  */

// Elemt one style
element1.className = "start";
element1.title = "Start Element";
element1.setAttribute("data-value", "Start");

// Element Two style
element2.className = "end";
element2.title = "End Element";
element2.setAttribute("data-value", "End");

console.log(element1);
myDiv.before(element1);
myDiv.after(element2);
