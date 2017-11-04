function Suit(title) {
    this.title = title
    this.runned = false
    this.tests = []
    this.currentTest = null
}

Suit.prototype.startTest = function(test) {
    this.currentTest = test
    this.tests.push(test)
}

Suit.prototype.getCurrentTest = function() {
    return this.currentTest
}

Suit.prototype.endTest = function() {
    this.getCurrentTest().endTest()
    this.currentTest = null
}

Suit.prototype.toJSON = function () {
    const self = this
    return {
        title: self.title,
        tests: [...self.tests.map(test => test.toJSON())]
    }
}

module.exports = {
    Suit
}