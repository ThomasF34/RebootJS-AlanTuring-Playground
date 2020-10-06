const fs = require('fs');

console.log(fs.readFileSync('exemple.txt'));

console.log(fs.readFileSync('exemple.txt', "utf-8"));

const buffer = fs.readFileSync('exemple.txt');
console.log(buffer.toString());

const a = [1, 2, 3];
// a.push(1);
// console.log(a);

/////////

// map flatMap filter reduce sort

const newArray = a.filter(num => num % 2 === 0);
console.log(a);
console.log(newArray);

const newArray2 = a.map(num => num / 2);
console.log(newArray2);

// [ [1, 2, 3], [2, [1, 2, 3]]] => [1, 2, 3, 2, 1, 2, 3]
const newArray3 = a.flatMap(num => [num, num *2]);
console.log(newArray3);

const reduce = a.reduce((acc, num) => acc + num, 0);
console.log(reduce);

//////////// Prototype

const user = {
  prenom: null,
  nom: null,
  manger: () => console.log("Je sais manger")
}

console.log(user.__proto__);

const thomas = Object.create(user);
thomas.prenom = 'Thomas';
thomas.nom = 'Falcone';

////////////// Classe (ES6+)

class Animal {
  constructor(prenom, nom, espece) {
    this.prenom = prenom;
    this.nom = nom;
    this.espece = espece
    this._dateNaissance = new Date();
  }

  manger() {
    console.log('Je sais manger');
  }
}

class Oiseau extends Animal {
  voler(){
    console.log("Je sais voler");
  }
}

const oiseau = new Oiseau("Bernard", "Dupond", "Pigeon");
oiseau.manger();
oiseau.voler();


////////////////////////////////

class User {
  constructor(firstname, lastname, email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }

  status(){
    console.log(`Je m'appelle ${this.firstname} ${this.lastname} et suis joignable sur ${this.email}`)
  }
}

const thomas = new User('Thomas', 'Falcone', 'thomas.falcone@mail.com');

thomas.firstname = 'Bernard';

console.log(thomas.firstname);

thomas = undefined;
// delete thomas.email;



