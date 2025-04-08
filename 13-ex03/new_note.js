const fs = require("node:fs")
const path = require("node:path")
const reusableFc = require('./reusable_functions')

async function newNote(noteName, content) {
    let notePath = path.resolve(`./notes/${noteName}.txt`)

    while (fs.existsSync(notePath)) {            
        const shouldReplace = await reusableFc.askFor(`\nA nota ${noteName}.txt já existe, deseja substituir?(S/N) `)

        if (shouldReplace.trim().toLowerCase() !== 's') {
            noteName = await reusableFc.askFor('Escolha um outro nome: ')
            notePath = path.resolve(`./notes/${noteName}.txt`) 
        } else {
            break
        }
    }

    fs.writeFileSync(notePath, content, 'utf-8')
    process.stdout.write(`\nNota salva com sucesso!`)
}

module.exports = newNote