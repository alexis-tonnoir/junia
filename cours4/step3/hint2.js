const fs = require('fs');

class LeboncoinDataService {Z

  static getInstance() {
  }

  constructor() {

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