function sendRequest() {
  let url = 'https://api.leboncoin.fr/finder/search'
  let dataraw = {
    extend: true,
    filters: {
      category: { id: "10" },
      enums: { ad_type:["offer"] },
      keywords: { text: "appartement" },
      location: {
        locations: [
          {
            locationType: "city",
            city: "lille"
          }
        ]
      }
    },
    limit: 35,
    limit_alu: 0,
    limit_sponsored: 1,
    sort_by: "time",
    sort_order: "desc"
  };
  
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("api_key", "ba0c2dad52b3ec");
  xhttp.send(JSON.stringify(dataraw));
  
  xhttp.onload = function() {
    console.log(this.responseText);
  };
}

sendRequest();