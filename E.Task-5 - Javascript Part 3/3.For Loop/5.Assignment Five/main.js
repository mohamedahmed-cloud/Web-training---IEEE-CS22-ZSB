let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
for (let i = 0; i < friends.length; i++) {
  if (friends[i].startsWith("A") || friends[i].startsWith("a")) {
    continue;
  }
  console.log(`1 => ${friends[i]}`);
}
