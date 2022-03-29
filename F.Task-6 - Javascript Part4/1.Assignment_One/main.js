function getDetails(zName, zAge, zCountry) {
  // First
  function namePattern(zName) {
    myName = zName.split(" ");

    MyOut =
      myName[0].slice(0, 1).toUpperCase() +
      myName[0].slice(1) +
      " " +
      myName[1].slice(0, 1).toUpperCase() +
      ".";
    return `${MyOut} `;
  }
  // Second
  function ageWithMessage(zAge) {
    myAge = parseInt(zAge);
    return `Your Age Is ${myAge} `;
  }

  function countryTwoLetters(zCountry) {
    return "You Live In " + zCountry.slice(0, 2).toUpperCase();
  }
  // Thrid
  function fullDetails() {
    return (
      namePattern(zName) +
      "," +
      ageWithMessage(zAge) +
      "," +
      countryTwoLetters(zCountry)
    );
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
