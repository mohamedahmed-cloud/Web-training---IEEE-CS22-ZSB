function itsMe() {
  return `I am A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function

itsMe = () => {
  return `I am A Normal Function`;
};
console.log(itsMe()); // Iam A Normal Function
// //////////////////////////////////////////////////////////////////////////
function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
