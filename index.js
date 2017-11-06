const Base = require("mocha").reporters.Base
const Spec = require("mocha").reporters.Spec
const Spa = require('./reporter').Spa
const Suit = require('./suit').Suit
const Test = require('./test').Test
const Hook = require('./hook').Hook

const spaReporter = new Spa()

global.spaReporter = spaReporter.buidPublickApi()

function SpaReporter(runner, opts) {
  Base.call(this, runner)
  const self = this
  runner.on("suite", function (suite) {
    if (!suite.root) {
      spaReporter.runSuit(new Suit(suite.fullTitle(), suite.pending && 'pending'))
    }
  })

  runner.on("hook end", function (hook) {
    spaReporter.getCurrentSuit().endHook()
  })

  runner.on("hook", function (hook) {
    spaReporter.getCurrentSuit().startHook(new Hook(hook.title))
  })

  runner.on("test", function (test) {
    if (spaReporter.getCurrentSuit()) {
      spaReporter.getCurrentSuit().startTest(new Test(test.title))
    }
  })

  runner.on("pending", function (test) {
    spaReporter.getCurrentSuit().startTest(new Test(test.title))
  })

  runner.on("pass", function (test) {
  })

  runner.on("fail", function (test, err) {
    spaReporter.attachStackError(err)
  })

  runner.on("test end", (test) => {
    const date = {
      state: test.pending ? 'pending' : test.state,
      speed: test.speed
    }
    spaReporter.getCurrentSuit().endTest(date)
  })

  runner.on("suite end", function (suite) {
    spaReporter.endSuit()
  })

  runner.on("end", () => {
    spaReporter.createReport(self.stats)
  })
}

module.exports = SpaReporter