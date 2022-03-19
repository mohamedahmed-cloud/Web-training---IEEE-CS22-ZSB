/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// The idea of this challenge is how to make a swap for varible

let swapOne = "";
let swapTwo = "";
let swapThree = "";
let swapFour = "";
function showDetails(a, b, c) {
  // cheking for a
  if (typeof a == "string") {
    a = a;
  } else if (typeof b == "string") {
    if (typeof a == "number") {
      swapOne = a;
      a = b;
    } else if (typeof a === "boolean") {
      swapTwo = a;
      a = b;
    }
  } else if (typeof c == "string") {
    if (typeof a == "number") {
      swapOne = a;
      a = c;
    } else if (typeof a === "boolean") {
      swapTwo = a;
      a = c;
    }
  }

  //   Checkin for b
  if (typeof b === "number") {
    b = b;
  } else if (typeof b !== "number" && typeof swapOne === "number") {
    swapThree = b;
    b = swapOne;
  } else if (typeof b != "number" && typeof swapTwo === "number") {
    swapFour = b;
    b = swapTwo;
  } else if (typeof c === "number") {
    b = c;
  }
  //   checking for c

  if (typeof c !== "boolean") {
    if (typeof swapTwo === "boolean") {
      c = swapTwo;
    } else if (typeof swapOne === "boolean" && swapOne === "false") {
      c = swapOne;
    } else if (typeof swapThree === "boolean") {
      c = swapThree;
    } else if (typeof swapFour === "boolean") {
      c = swapFour;
    }
  }
  if (c === true) {
    console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
  } else if (c === false) {
    console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`);
  }
}
// I change the value to accurate check
showDetails("Osama", 30, true);
showDetails(23, "Mahmoud", false);
showDetails(true, 35, "Ahmed");
showDetails(false, "Gamal", 23);
