const fs = require("node:fs")

function removeNote(notePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(notePath, (error) => {
            if (error) {
                reject(error.message)
            } else {
                resolve()
            }
        })
    })
}

module.exports = removeNote