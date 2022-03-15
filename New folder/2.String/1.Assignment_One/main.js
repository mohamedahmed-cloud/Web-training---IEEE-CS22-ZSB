let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.charAt(userName.indexOf("E")).toLowerCase()); // e
console.log(userName[userName.indexOf("E")].toLowerCase().repeat(3)); // eee
