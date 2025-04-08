const rl = require('./rl')

function askFor(text) {
    return new Promise((resolve) => {
        rl.question(text, (answer) => {
            resolve(answer)
        })
    })
}

function invalidOption() {
    process.stdout.write(`Opção inválida!`)
}

module.exports = {
    askFor,
    invalidOption
}