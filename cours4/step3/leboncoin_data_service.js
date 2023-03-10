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
    this.leboncoinData = {};
    this.fileName = 'leboncoin_data.json'
  }

  fromFile() {
    // read file and save data into leboncoinData
    console.log('calling fromFile')
  }

  appendToData(annonces) {
    // add annones to leboncoinData
    console.log('calling appendToFile')
  }

  toFile() {
    // write leboncoinData into file
    console.log('calling toFile')
  }

  read() {
    // simply display leboncoinData
    console.log('calling read')
  }
}

module.exports = {
  getService: function() {
    return LeboncoinDataService.getInstance();
  }
}