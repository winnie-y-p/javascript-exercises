
let firstName = "Carlos";
let lastName = "Stevenson";
let thisYear = 1965;
let birthYear = 1947;
let fullName = firstName + " " + lastName;
let age = thisYear - birthYear;

/*The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

let greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";





// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
