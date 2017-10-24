const Base = require("mocha").reporters.Base
const Spec = require("mocha").reporters.Spec
const Spa = require('./reporter').Spa
const Suit = require('./suit').Suit
const Test = require('./test').Test

const spaReporter = new Spa()

function SpaReporter(runner, opts) {
  Base.call(this, runner)
  // Spec.call(this, runner)
  function invokeHanlder(handler) {
    return function() {
        try {
            return handler.apply(this, arguments);
        } catch(error) {
            console.error("Internal error in Allure:", error); // eslint-disable-line no-console
        }
    };
}
  runner.on("suite", function (suite) {
    if(!suite.root) {
      spaReporter.runSuit(new Suit(suite.fullTitle()))
    }
  })


  runner.on("test", invokeHanlder(function (test) {
    if(spaReporter.currentSuit) {
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

  runner.on("suite end", invokeHanlder(function (suite) {
    console.log('!!!!!!!!!!!!!', suite.root)
    suite.root ? spaReporter.createReport() : spaReporter.endSuit()
  }))
}



module.exports = SpaReporter