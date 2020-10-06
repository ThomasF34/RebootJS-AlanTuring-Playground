const User = require('./user');
const assert = require('assert');

// const thomas = new User("Thomas", "Falcone", "adresse");

// thomas.changeLastname("Dupont");

// if(thomas.lastname === "Dupont"){
//   console.log("User#changeLastname : OK");
// } else {
//   throw new Error("User#changeLastname: ERROR");
// }

// thomas.changeFirstname("Bernard");

// if(thomas.firstname === "Bernard"){
//   console.log("User#changeFirstname : OK");
// } else {
//   throw new Error(`User#changeFirstname: ERROR ${thomas.firstname} Bernard`);
// }

const thomas = new User("Thomas", "Falcone", "adresse");

thomas.changeLastname("Dupont");

assert.strictEqual(thomas.lastname, "Dupont")
console.log("User#changeLastname OK")

thomas.changeFirstname("Bernard");

assert.strictEqual(thomas.firstname, "Bernard")
console.log("User#changeFirstname OK")
