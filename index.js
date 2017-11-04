const Base = require("mocha").reporters.Base
const Spec = require("mocha").reporters.Spec
const Spa = require('./reporter').Spa
const Suit = require('./suit').Suit
const Test = require('./test').Test

const spaReporter = new Spa()

global.spaReporter = spaReporter.buidPublickApi()

function SpaReporter(runner, opts) {
  Base.call(this, runner)
  function invokeHanlder(handler) {
    return function () {
      try {
        return handler.apply(this, arguments)
      } catch (error) {
        console.error(error)
      }
    }
  }
  const self = this
  runner.on("suite", function (suite) {
    if (!suite.root) {
      spaReporter.runSuit(new Suit(suite.fullTitle()))
    }
  })

  runner.on("test", invokeHanlder(function (test) {
    if (spaReporter.currentSuit) {
      spaReporter.currentSuit.startTest(new Test(test.title))
    }
  }))

  runner.on("pending", invokeHanlder(function (test) {

  }))

  runner.on("pass", function (test) {

  })

  runner.on("fail", function (test, err) {

  })

  runner.on("hook end", function (hook) {

  })
  runner.on("test end", () => {
    spaReporter.getCurrentSuit().endTest()
  })

  runner.on("suite end", invokeHanlder(function (suite) {
    // if(suite.root) {
    //   console.log(self)
    // }
    spaReporter.endSuit()
  }))

  runner.on("end", () => {
    spaReporter.createReport(self.stats)
    console.log('end!!!!!!!!!!!!', self.stats)
  })
}

module.exports = SpaReporter