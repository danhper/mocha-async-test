var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path')

var testDir = 'test'

var dataManager = require('./lib/data-manager')

var mocha = new Mocha()


fs.readdirSync(testDir).filter(function (file) {
  return file.substr(-3) === '.js'
}).forEach(function (file) {
  mocha.addFile(path.join(testDir, file))
})

dataManager.loadData().then(function () {
  mocha.run(function(failures) {
    process.on('exit', function () {
      process.exit(failures)
    })
  })
})
