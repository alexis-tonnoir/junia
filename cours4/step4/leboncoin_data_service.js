const fs = require('fs');

class LeboncoinDataService {
  static _intance = null;

  static getInstance() {
    if (this._intance == null) {
      this._intance = new LeboncoinDataService()
    }
    return this._intance
  }

  constructor() {
    if (LeboncoinDataService._intance != null) {
      throw new Error("New instance cannot be created!!");
    }
    console.log('creating  service');
    this.leboncoinData = {};
    this._fileName = 'leboncoin_data.json'
    this.fromFile();
  }

  fromFile() {
    // read file and save data into leboncoinData
    console.log('calling fromFile');
    if (fs.existsSync(this._fileName)) {
      const data = fs.readFileSync(this._fileName);
      this.leboncoinData = JSON.parse(data);
    }
    console.log('data is', this.leboncoinData.length);
  }

  appendToData(annonces) {
    // add annones to leboncoinData
    console.log('calling appendToData with', annonces.total);
    annonces.ads.forEach(element => {
      this.leboncoinData[element.list_id] = element
    });
  }

  toFile() {
    // write leboncoinData into file
    console.log('calling toFile with', this.leboncoinData);
    fs.writeFileSync(this._fileName, JSON.stringify(this.leboncoinData));
  }

  read() {
    // simply display leboncoinData
    console.log('reading', this.leboncoinData.length);
    return JSON.stringify(this.leboncoinData);
  }
}

module.exports = {
  getService: function() {
    return LeboncoinDataService.getInstance();
  }
}