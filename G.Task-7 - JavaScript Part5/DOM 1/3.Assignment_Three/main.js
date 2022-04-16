myText.innerHTML =
  "<div>{<span id='Dollar'> 0 </span>} USD Dollar ={<span id='Pound'>0 </span> }Egyptian Pound</div >";
// let Element1 = document.querySelector("span");
let input = document.getElementsByName("Dollar")[0];
input.oninput = function () {
  Dollar.innerHTML = input.Value;
  Pound.innerHTML = input.Value;
  //   console.log(Element1);
};
