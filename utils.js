const idGenerator = (length) => {
    const stringId = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
    let id = '';
    const rand = () => parseInt((Math.random() * 55).toFixed(0))
    for (let i = 0; i < 12; i++) {
        id += stringId[rand()]
    }
    return id
}

const assertDirExists = () => {
    if ('darwin' === process.platform) {
        let dirStructure = ''
        const { spawn } = require('child_process')
        const ls = spawn('ls')
        ls.stdout.on('data', (data) => {
            dirStructure += data.toString()
        })
        ls.on('exit', () => {
            if (!dirStructure.includes('spa-report')) {
                spawn('mkdir', ['spa-report'])
            }
        })
    }
}

let a = [{
    "title": "a",
    "body": "() => {\n    \n  }",
    "async": 0,
    "sync": true,
    "timedOut": false,
    "pending": false,
    "type": "test",
    "file": "C:\\Users\\dpot\\Desktop\\mocha-learn\\mocha-spa-reporter\\example\\a.js",
    "parent": "#<Suite>",
    "ctx": "#<Context>",
    "id": "KB1A3nIkWZ3K",
    "duration": 0,
    "state": "passed",
    "speed": "fast"
},
{
    "title": "B 0",
    "body": "() => {\r\n      \r\n    }",
    "async": 0,
    "sync": true,
    "timedOut": false,
    "pending": false,
    "type": "test",
    "file": "C:\\Users\\dpot\\Desktop\\mocha-learn\\mocha-spa-reporter\\example\\b.js",
    "parent": "#<Suite>",
    "ctx": "#<Context>",
    "id": "CyfIUfWxxyDc",
    "duration": 0,
    "state": "passed",
    "speed": "fast"
},
{
    "title": "B 1",
    "body": "() => {\r\n      \r\n    }",
    "async": 0,
    "sync": true,
    "timedOut": false,
    "pending": false,
    "type": "test",
    "file": "C:\\Users\\dpot\\Desktop\\mocha-learn\\mocha-spa-reporter\\example\\b.js",
    "parent": "#<Suite>",
    "ctx": "#<Context>",
    "id": "KzOThLTZ2pE1",
    "duration": 0,
    "state": "passed",
    "speed": "fast"
}]


const dataToJson = (allTests) => {
    console.log('! c ')
    const suites = {}
    // allTests.forEach(function(element) {
    //     console.log('!d', Object.keys(element), element['parent'])
    //     console.log(element.parent)
    // })
}

module.exports = {
    assertDirExists,
    dataToJson,
    idGenerator
}