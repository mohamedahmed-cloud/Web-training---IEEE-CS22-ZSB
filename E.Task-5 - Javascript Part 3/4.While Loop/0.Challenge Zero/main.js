/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

// To Get rid of any thing after Stop
let newAdmins = [];
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop" || myAdmins[i] === "stop") {
    break;
  } else {
    newAdmins.push(myAdmins[i]);
  }
}
let newEmployees = [];
for (let i = 0; i < myEmployees.length; i++) {
  if (myEmployees[i] === "Stop" || myEmployees[i] === "stop") {
    break;
  } else {
    newEmployees.push(myEmployees[i]);
  }
}
// console.log(newAdmins);
// Frist Block
document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${newAdmins.length} Admins</div>`);
document.write(`<div><hr></div>`);
for (let i = 0; i < newAdmins.length; i++) {
  document.write(`The Admin for Group ${i + 1} Is ${newAdmins[i]}`);
  document.write(`<div></br></div>`);
  document.write(`<div><h2>Team Members : </h2></div>`);
  document.write(`<div></br></div>`);
  let counter = 1;
  for (let j = 0; j < newEmployees.length; j++) {
    if (newEmployees[j][0] === newAdmins[i][0]) {
      document.write(` ${counter} - ${newEmployees[j]}`);
      document.write(`<div></br></div>`);
      counter++;
    }
  }
  counter = 1;

  document.write(`<div><hr></div>`);
}
