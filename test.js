function Test(title) {
    this.title = title
    // this.runned = false
}

// Test.prototype.start = function () {
//     this.runned = true
// }

// Test.prototype.end = function () {
//     this.runned = false
// }

Test.prototype.toJSON = function () {
    const self = this
    return {
        title: self.title
    }
}

module.exports = {
    Test
}