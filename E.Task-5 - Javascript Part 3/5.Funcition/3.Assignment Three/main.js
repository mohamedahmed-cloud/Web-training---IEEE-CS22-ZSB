function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 10 && theAge > 100) {
    console.log(`Your age with by week is ${theAge * 12 * 4}`);
    console.log(`Your age with by Month is ${theAge * 12}`);
    console.log(`Your age with by Year is ${theAge}`);
  } else {
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
