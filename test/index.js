var assert = require('assert')

var myModule = require('..')

describe('addition', function () {
  it('should add', function () {
    assert.equal(1 + 1, myModule.add(1, 1))
  })
})
