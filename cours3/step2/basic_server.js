const http = require("http");
// const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {

  console.log(`Méthode: ${req.method}`);
  console.log(`Url: ${req.url}`);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html><body><p>En attente d'une requete.</p></body></html>");
  res.end("OK");
});

server.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});