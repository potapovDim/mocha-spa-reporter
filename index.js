const Base = require("mocha").reporters.Base

function Spa () {
  this.opts = {}
}


Spa.prototype.setOptions = function (opts) {
  this.opts = opts
}

const spaReporter = new Spa()
function SpaReporter(runner, opts) {
    Base.call(this, runner)
    spaReporter.setOptions(opts.reporterOptions || {})

    function invokeHanlder(handler) {
        return function() {
            try {
                return handler.apply(this, arguments)
            } catch(error) {
                console.error(error)
            }
        }
    }

    runner.on("suite", invokeHanlder(function (suite) {
      console.log('suite ', suite.title)
      // console.log(suite)
    }))

    runner.on("suite end", invokeHanlder(function (suite) {
      console.log('suit end')
    }))

    runner.on("test", invokeHanlder(function(test) {

      console.log("test", test.title)
    }))

    runner.on("pending", invokeHanlder(function(test) {
      console.log('pending')
    }))

    runner.on("pass", invokeHanlder(function() {
      console.log('pass')
    }))

    runner.on("fail", invokeHanlder(function(test, err) {
      console.log(test, err, 'fail')
    }))

    runner.on("hook end", invokeHanlder(function(hook) {
      console.log('hook end')
    }))
}

module.exports = SpaReporter