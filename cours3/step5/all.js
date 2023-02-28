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
    myApiRequester.send(responseText);
  }

  processRequest(dataraw, page) {
    this.httpRequester.open("POST", this.url, true);
    this.httpRequester.setRequestHeader("Content-type", "application/json");
    this.httpRequester.setRequestHeader("api_key", "ba0c2dad52b3ec");
    this.httpRequester.onload = () => { this.processResponse(this.httpRequester.responseText, page) };
    this.httpRequester.send(JSON.stringify(dataraw));
  }
}

class LeboncoinRequestPoster extends GenericRequestPoster {
  constructor(categoryId, text, pageSize) {
    super('https://api.leboncoin.fr/finder/search')
    this.pageSize = pageSize
    this.dataraw = {
      extend: true,
      filters: {
        category: { id: categoryId },
        enums: { ad_type:["offer"] },
        keywords: { text: text },
        location: {
          locations: [
            {
              locationType: "city",
              city: "lille"
            }
          ]
        }
      },
      limit: pageSize,
      limit_alu: 0,
      limit_sponsored: 1,
      sort_by: "time",
      sort_order: "desc"
    };
  }

  processRequest(page) {
    let dataraw = { offset: this.pageSize * page, ...this.dataraw };
    super.processRequest(dataraw, page)
  }
}

class LeboncoinAppartementRequestPoster extends LeboncoinRequestPoster {
  constructor() {
    super('9', 'appartement', 20)
  }
}

let poster = new LeboncoinAppartementRequestPoster();
poster.processRequest(0);