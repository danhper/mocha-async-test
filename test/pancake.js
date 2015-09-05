var assert = require('assert')

var dataManager = require('../lib/data-manager')

var fn = function (value) {
  return value + ' ' + 'pancake'
}

describe('test', function () {
  describe('example', function () {
    dataManager.getData().forEach(function (test) {
      it('should return ' + test.expect, function (){
        var value = fn(test.arg)
        assert.equal(value, test.expect)
      })
    })
  })
})
