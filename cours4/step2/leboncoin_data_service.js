const fs = require('fs');

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

function readDataFile() {
  fs.readFile('./test.json', (err, data) => {
    if (err) throw err;
    let fileData = JSON.parse(data);
    console.log(fileData);
  });
}

module.exports = {
  processAppartRequest: function (request) { processAppartRequest(request); },
  readFile: function() { readDataFile(); }
}