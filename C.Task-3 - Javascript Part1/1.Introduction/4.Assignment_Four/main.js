console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Grouip");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); //To end Grand Group
console.groupEnd(); // To End Child Group
console.groupEnd(); //To End Group One
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
