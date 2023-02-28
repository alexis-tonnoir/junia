var http = require('http');
var service = require('./leboncoin_data_service.js');

console.log('creating server on port 8080')

function defaultProcess(req) {
  console.log('default process');
}

function handleRequest(req) {
  console.log('method is', req.method);
  console.log('url is', req.url);
  if (req.method == 'POST' && req.url == '/leboncoin_json') {
    return service.getService().appendToFile();
  } else if (req.method == 'GET' && req.url == '/leboncoin_json') {
    return service.getService().read();
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