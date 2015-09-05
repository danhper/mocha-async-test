var Promise = require('bluebird')

function DataManager() {
  this.data = []
  this.loaded = false
}

DataManager.prototype.loadData = function () {
  return Promise.resolve('kitty pancake')
    .delay(500)
    .then(function (value) {
      this.data = [
        {
          'arg': 'kitty',
          'expect': value
        },
        {
          'arg': 'doggy',
          'expect': 'doggy pancake'
        }
      ]
      this.loaded = true
    }.bind(this))
}

DataManager.prototype.getData = function() {
  if (!this.loaded) {
    throw new Error('data has not been loaded')
  }
  return this.data;
};

module.exports = new DataManager()
