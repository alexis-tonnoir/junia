const fs = require('fs');

class LeboncoinDataService {
  static _intance = null;
  static _fileName = 'leboncoin_data.json'

  static getInstance() {
    if (this._intance == null) {
      // Do something
    }
    return //something
  }

  constructor() {
    if (LeboncoinDataService._intance != null) {
      // Do something
    }
    // init data
  }

  toFile() {
    console.log('calling toFile')
  }

  fromFile() {
    console.log('calling fromFile')
  }

  appendToFile() {
    console.log('calling appendToFile')
  }

  read() {
    console.log('calling read')
  }
}

module.exports = {
  getService: function() {
    return LeboncoinDataService.getInstance();
  }
}