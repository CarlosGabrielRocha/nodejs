const path = require("node:path")
const fs = require("node:fs")

function getSavedNotes() {
    return new Promise((resolve, reject) => {
        fs.readdir(path.resolve('./notes'), (error, files) => {
            if (error) {
                reject(error)
            } else {
                const filesName = files.reduce((accum, currentValue) => accum += `\n- ${currentValue}`, `Notas Salvas:`)
                resolve(filesName)
            }
        })
    })
}

module.exports = getSavedNotes