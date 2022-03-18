let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.splice(0, 1);
friends.splice(2, 1);
console.log(friends); // ["Eman", "Osama"]
// OR
friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.splice(0, 1);
friends.length = 2;
console.log(friends); // ["Eman", "Osama"]
