function Suit(title, status = 'executed') {
    this.status = status
    this.title = title
    this.runned = false
    this.tests = []
    this.currentTest = null
}

Suit.prototype.startTest = function (test) {
    this.currentTest = test
    this.tests.push(test)
}

Suit.prototype.getCurrentTest = function () {
    return this.currentTest
}

Suit.prototype.endTest = function (date) {
    this.getCurrentTest().endTest(date)
    this.currentTest = null
}

Suit.prototype.toJSON = function () {
    const self = this
    return {
        title: self.title,
        status: self.status,
        tests: [...self.tests.map(test => test.toJSON())]
    }
}

module.exports = {
    Suit
}