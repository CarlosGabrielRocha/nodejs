const fs = require("node:fs") 

function readNote(notePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(notePath, 'utf-8', (error, data) => {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = readNote