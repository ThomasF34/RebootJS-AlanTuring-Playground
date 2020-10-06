class User {
  constructor(firstname, lastname, email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }

  status(){
    return `Je m'appelle ${this.firstname} ${this.lastname} et suis joignable sur ${this.email}`;
  }

  changeLastname(newName){
    this.lastname = newName
  }

  changeFirstname(newFirstname){
    this.firstname = newFirstname;
  }
}

// const thomas = new User('Thomas', 'Falcone', 'thomas.falcone@mail.com');

// thomas.firstname = 'Bernard';

// console.log(thomas.firstname);

// thomas = undefined;

module.exports = User