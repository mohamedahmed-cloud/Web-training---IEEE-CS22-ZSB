let element1 = document.getElementsByClassName("one")[0];
let element2 = document.getElementsByClassName("two")[0];
let div = document.getElementsByTagName("div");
// First
let swap = element1.textContent;
element1.textContent = element2.textContent;
element2.textContent = swap + " " + div.length;
// Second
let swap2 = element1.title;
element1.title = element2.title;
element2.title = swap2;
console.log(element1);
console.log(element2);
console.log(element2.textContent);
