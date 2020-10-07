const http = require('http');
const User = require('./user');

const users = [
  new User('Thomas', 'Falcone', 'thomas.falcone@mail.com'),
  new User('Philippa', 'Dupont', 'mail@mail.mail')
];

const server = http.createServer((request, response) => {
  const url = request.url;
  if(url === '/'){
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World!');
  } else if (url === '/users'){
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');
  }
});

server.listen(3000, () => { console.log("J'écoute les requêtes sur le port 3000")});