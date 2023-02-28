var http = require('http');
const fs = require('fs');

console.log('creating server on port 8080')

function appendToFile(data, filename = './test.json') {
  fs.appendFile(filename, JSON.parse(data), (err) => { if (err) { console.log(err) } });
}

function processAppartRequest(request) {
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    appendToFile(body);
  });
}

function defaultProcess(req) {
  console.log('default process');
}

function handleRequest(req) {
  console.log('method is', req.method);
  console.log('url is', req.url);
  if (req.method == 'POST' && req.url == '/leboncoin_json') {
    return processAppartRequest(req);
  }
  defaultProcess(req)
}

function basicHandling(req, response) {
  handleRequest(req);

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  response.write('ok');
  response.end();
}

http.createServer(basicHandling).listen(8080); //the server object listens on port 8080