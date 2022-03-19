let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
counter++;
for (let i = index; i < friends.length; i++) {
  if (friends[i][0] === "A" || typeof friends[i] == "number") {
    continue;
  } else {
    console.log(`${counter} => ${friends[i]}`);
    counter++;
  }
}
