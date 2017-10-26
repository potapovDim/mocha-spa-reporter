const {
    assertRootDirExist,
    assertResultDirExist,
    generateReport
} = require('./utils')

const {Step} = require('./step')

function Spa() {
    this.dirName = `Date=${new Date().toLocaleDateString()} Time=${new Date().getHours()}-${new Date().getMinutes()}`
    this.opts = {}
    this.suits = []
    this.currentSuit = null
    this.stats = null
}

Spa.prototype.runSuit = function (suit) {
    assertResultDirExist(this.dirName)
    this.currentSuit = suit
    this.suits.push(suit)
}

Spa.prototype.getCurrentSuit = function (dsa) {
    return this.currentSuit
}

Spa.prototype.attachData = function (data) {
    this.getCurrentSuit().getCurrentTest().attachFile+(data)
}

Spa.prototype.createStep = function (title) {
    this.getCurrentSuit().getCurrentTest().addStep(new Step(title))
}

Spa.prototype.setUpEcoSystem = function () {

}

Spa.prototype.endSuit = function () {
    this.currentSuit = null
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
    generateReport(this.dirName, data)
}


Spa.prototype.buidPublickApi = function() {
    const self = this
    return {
        createStep: self.createStep.bind(self),
        attachData: self.attachData.bind(self)
    }
}

module.exports = {
    Spa
}