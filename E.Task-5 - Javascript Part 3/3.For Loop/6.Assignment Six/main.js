let start = 0;
let swappedName = "elZerO";
let newname = "";
for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] == swappedName[i].toLowerCase()) {
    newname = newname + swappedName[i].toUpperCase();
  } else {
    newname = newname + swappedName[i].toLowerCase();
  }
}
console.log(newname);
