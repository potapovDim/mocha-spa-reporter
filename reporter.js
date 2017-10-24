const {assertDirExists} = require('./utils')

function Spa() {
    this.dirName = `Run time ${new Date().toLocaleString()}`
    this.opts = {}
    this.suits = []
    this.currentSuit = null
    this.stats = null
}

Spa.prototype.setUpEcoSystem = function() {
}

Spa.prototype.attachFile = function (title, data) {
    const fs = require('fs')
    const path = require('path')
    if(data instanceof Buffer && data.length !== 0) {
        const month = new Date().getMonth()
        const day = new Date().getDay()
        const hours = new Date().getHours()
    }
}

Spa.prototype.runSuit = function (suit) {
    assertDirExists()
    this.currentSuit = suit
    this.suits.push(suit)
}


Spa.prototype.endSuit = function () {
    this.currentSuit = null
}

Spa.prototype.getCurrentSuit = function () {
    return this.currentSuit
}

Spa.prototype.toJSON = function () {
    const self = this
    console.log(self.suits[0].tests[0].toJSON(), '-=-=-', self.suits.map(suit => suit.toJSON()))
    return {
        suits: [...self.suits.map(suit => suit.toJSON())]
    }
}

Spa.prototype.createReport = function () {
    const fs = require('fs')
    const path = require('path')
    const data = this.toJSON()
    fs.writeFile('./test.json', JSON.stringify(data, null, '\t'), (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = { Spa }