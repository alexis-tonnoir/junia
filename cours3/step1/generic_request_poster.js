class GenericRequestPoster {
  constructor(url) {
    this.url = url;
    this.httpRequester = new XMLHttpRequest();
  }
  
  processResponse(responseText, page) {
    console.log('page', page);
    console.log(responseText)
  }

  processRequest_temp(dataraw, page) {
    this.httpRequester.open("POST", this.url, true);
    this.httpRequester.setRequestHeader("Content-type", "application/json");
    this.httpRequester.setRequestHeader("api_key", "ba0c2dad52b3ec");
    let processingFunction = this.processResponse
    this.httpRequester.onload = function() { processingFunction(this.responseText, page) };
    this.httpRequester.send(JSON.stringify(dataraw));
  }

  processRequest(dataraw, page) {
    this.httpRequester.open("POST", this.url, true);
    this.httpRequester.setRequestHeader("Content-type", "application/json");
    this.httpRequester.setRequestHeader("api_key", "ba0c2dad52b3ec");
    this.httpRequester.onload = () => { this.processResponse(this.httpRequester.responseText, page) };
    this.httpRequester.send(JSON.stringify(dataraw));
  }
}