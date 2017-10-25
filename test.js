
const { idGenerator, writeFile } = require('./utils')


function Test(title) {
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

Test.prototype.addFile = function (data) {
    const id = idGenerator(25)
    this.files.push(id)
    writeFile(id)
}

Test.prototype.attachFile = function (file) {
    console.log(file)
    this.getCurrentStep()
        ? this.getCurrentStep().addFile(file)
        : this.addFile(file)
}

Test.prototype.toJSON = function () {
    const self = this
    return {
        title: self.title,
        steps: [...self.steps.map(step => step.toJSON())]
    }
}

module.exports = {
    Test
}