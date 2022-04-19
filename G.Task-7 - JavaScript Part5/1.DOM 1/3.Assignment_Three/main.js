let myText = document.querySelector(".result");
// console.log(myText);
function getText(dollar) {
  return `<div>{<span id='Dollar'>${dollar} </span>} USD Dollar ={<span id='Pound'>${(
    dollar * 15.6
  ).toFixed(2)} </span> }Egyptian Pound</div >`;
}

myText.innerHTML = getText(0);
let input = document.getElementsByName("dollar")[0];

input.oninput = function (e) {
  let myValue = e.target.value;
  // console.log(myValue);
  if (parseFloat(myValue)) {
    myText.innerHTML = getText(myValue);
  } else if (myValue === "" || myValue === 0) {
    myText.innerHTML = getText(0);
  } else {
    alert("please enter a value");
  }
  //   console.log(Element1);
};
