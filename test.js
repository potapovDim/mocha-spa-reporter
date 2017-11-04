
const { idGenerator, outputFile } = require('./utils')


function Test(title) {
    this.timeStart = +new Date()
    this.timeEnd = null
    this.title = title
    this.steps = []
    this.files = []
    this.currentStep = null
}

Test.prototype.addStep = function (step) {
    this.currentStep = step
    this.steps.push(step)
}

Test.prototype.getCurrentStep = function () {
    return this.currentStep
}

Test.prototype.addFile = function (dir, data) {
    const id = idGenerator(25)
    this.files.push(id)
    outputFile(dir, data, id)
}

Test.prototype.attachFile = function (dir, file) {
    this.getCurrentStep()
        ? this.getCurrentStep().addFile(dir, file)
        : this.addFile(dir, file)
}

Test.prototype.endTest = function () {
    this.timeEnd = + new Date()
}

Test.prototype.toJSON = function () {
    const self = this
    return {
        title: self.title,
        timeStart: self.timeStart,
        timeEnd: self.timeEnd,
        durration: self.timeEnd - self.timeStart,
        steps: [...self.steps.map(step => step.toJSON())]
    }
}

module.exports = {
    Test
}