let element1 = document.querySelector(".classes-to-add");
element1.addEventListener("blur", function toAdd(e) {
  let toAdd = e.target.value;
  console.log(toAdd);
  return toAdd;
});

let element2 = document.querySelector(".classes-to-remove");
element2.addEventListener("blur", function toRemove(e) {
  let toRemove = e.target.value;
  console.log(toRemove);
  return toRemove;
});
let element3 = document.querySelector(".element current");
let store = document.querySelector(".classes-list");
console.log(store);
console.log(element3);
store.addEventListener("click", function toClick(e) {
  // if()
});
