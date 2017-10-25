const idGenerator = (length) => {
    const stringId = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
    let id = '';
    const rand = () => parseInt((Math.random() * 55).toFixed(0))
    for (let i = 0; i < 12; i++) {
        id += stringId[rand()]
    }
    return id
}


const assertConvertToJson = (data) => {
    if (typeof data === 'string') {
        return false
    }
    try {
        JSON.stringify(data)
        return true
    } catch (e) {
        console.error(e.stack)
        return false
    }
}

const writeFile = (dir, data, id) => {
    const fs = require('fs')
    const path = require('path')
    if (data instanceof Buffer && data.length !== 0) {
        fs.writeFile(`./spa-report/${dir}/${id}.png`, data, (err) => {
            if (err) {
                console.log(err)
            }
        })
    } else if (assertConvertToJson(data)) {
        fs.writeFile(`./spa-report/${dir}/${id}.json`, JSON.stringify(runStructure, null, '\t') , (err) => {
            if (err) {
                console.log(err)
            }
        })
    } else {
        fs.writeFile(`./spa-report/${dir}/${id}.txt`, data , (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}


const generateReport = (dir, runStructure) => {
    return () => {
        const fs = require('fs')
        fs.writeFile(`./spa-report/${dir}/test.json`, JSON.stringify(runStructure, null, '\t'), (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}

const assertRootDirExist = () => {
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

const assertResultDirExist = (outputDirResult, cb) => {
    let dirStructure = ''
    const { spawn } = require('child_process')
    const ls = spawn('ls', ['spa-report'])
    ls.stdout.on('data', (data) => {
        dirStructure += data.toString()
    })
    ls.on('exit', () => {
        if (!dirStructure.includes(outputDirResult)) {
            const mkDir = spawn('mkdir', [`spa-report/${outputDirResult}`])
            mkDir.on('exit', () => {
                cb && cb()
            })
        }
    })
}

module.exports = {
    assertRootDirExist,
    assertResultDirExist,
    generateReport,
    idGenerator
}