class GenericRequestPoster {
  constructor(url) {
    this.url = url;
    this.httpRequester = new XMLHttpRequest();
  }
  
  processResponse(responseText, page) {
    let myApiUrl = 'http://localhost:8080/leboncoin_json'
    let myApiRequester = new XMLHttpRequest();
    myApiRequester.open("POST", myApiUrl, true);
    myApiRequester.setRequestHeader("Content-type", "application/json");
    myApiRequester.send(JSON.stringify(responseText));
  }

  processRequest(dataraw, page) {
    this.httpRequester.open("POST", this.url, true);
    this.httpRequester.setRequestHeader("Content-type", "application/json");
    this.httpRequester.setRequestHeader("api_key", "ba0c2dad52b3ec");
    this.httpRequester.onload = () => { this.processResponse(this.httpRequester.responseText, page) };
    this.httpRequester.send(JSON.stringify(dataraw));
  }
}