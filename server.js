const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const User = require('./user');

const users = [
  new User('Thomas', 'Falcone', 'thomas.falcone@mail.com'),
  new User('Philippa', 'Dupont', 'mail@mail.mail')
]

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.set('view engine', 'ejs');

server.get('/users', (req, res) => {
  // res.send(users)
  // res.render('users', { users: users})
  res.render('users', { users })
});

server.get('/users/:userId', (req, res) => {
  const id = parseInt(req.params["userId"]);
  const filteredUser = users.find(user => user.id === id);
  // res.send(filteredUser);
  res.render('user', { user: filteredUser});
});

server.post('/users', (req, res) => {
  const { firstname, lastname, email } = req.body;

  if(!firstname || !lastname || !email){
    return res.status(400).send("Please provide a firstname, lastname and email");
  }

  const newUser = new User(firstname, lastname, email);
  users.push(newUser);

  res.send(newUser);
});

server.patch('/users/:userId', (req, res) => {
  // TODO
  res.send("Not yet implemented");
});

server.delete('/users/:userId', (req, res) => {
  // TODO
  res.send("Not yet implemented");
})
server.get('/', (req, res) => {
  // res.send("Hello World!");
  res.render('index');
});

server.listen(3000, () => console.log("J'écoute sur le port 3000"));
