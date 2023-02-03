const http = require("http");
// const fs = require("fs");
const port = 8080;

const server = http.createServer((req, response) => {

  console.log(`Méthode: ${req.method}`);
  console.log(`Url: ${req.url}`);

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<html><body><p>En attente d'une requete.</p></body></html>");
  response.end("OK");
});

server.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});