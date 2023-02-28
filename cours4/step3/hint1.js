const fs = require('fs');

class LeboncoinDataService {

  static getInstance() {
  }

  constructor() {

  }
}

module.exports = {
  getService: function() {
    return LeboncoinDataService.getInstance();
  }
}