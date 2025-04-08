const fs = require("node:fs")
const rl = require('./rl')
const menu = require('./menu')
const path = require("node:path")

const notesPath = path.join(__dirname, 'notes')

if (!fs.existsSync(notesPath)) {
    fs.mkdir(notesPath, (error) => {
        if (error) console.log(error)
    })
}

rl.on('SIGINT', () => {
    console.log('\nAté mais. ^_^')
    process.exit(0)
})


const args = process.argv

switch (args[2]) {
    case 'new':
        menu.execOptionOne()
        break
    case 'saves':
        menu.execOptionTwo()
        break
    case 'read':
        menu.execOptionThree()
        break
    case 'remove':
        menu.execOptionFour()
        break
    default:
        menu.showMenu()
}
