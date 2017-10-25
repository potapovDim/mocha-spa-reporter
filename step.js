function Step (title) {
    this.title = title
    this.files = []
}

Step.prototype.addFile = function (file) {
    this.files.push(file)
}

Step.prototype.toJSON = function () {
    const self = this 
    return {
        title: self.title,
        files: []
    }
}

module.exports = {
    Step
}