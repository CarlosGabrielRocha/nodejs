const path = require("node:path")
const fs = require("node:fs") 
const rl = require('./rl')
const newNote = require('./new_note')
const { invalidOption, askFor } = require('./reusable_functions')
const getSavedNotes = require("./get_saved_notes")
const readNote = require("./read_note")
const removeNote = require("./remove_note")


function showMenu(invalidOpt) {
    console.clear()
    process.stdout.write(
        '\n----------------------\n  QUICK NOTES v1.0\n----------------------'
    )
    process.stdout.write(
        '\n\nWelcome!\n\nMENU:\n1. Nova Anotação\n2. Listar Anotações Salvas\n3. Ler Anotação\n4. Excluir Anotação\n5. Encerrar\n\n'
    )

    if (invalidOpt) {
        rl.question('(Opção inválida) Digite uma opção: ', execOption)
    } else {
        rl.question('Digite uma opção: ', execOption)
    }
}

async function execOption(answer) {
    try {
        switch (answer) {
            case '1':
                await execOptionOne()
                break 
            case '2':
                await execOptionTwo()
                break
            case '3':
                await execOptionThree()
                break
            case '4':
                await execOptionFour()
                break
            case '5':
                execOptionFive()
                break
            default:
                showMenu(true)
        }
    } catch (error) {
        console.log(error.message)
        backToMenu(true)
    }
}

function backToMenu(interactFirst = false) {
    if (interactFirst === true) {
        rl.question('\nPressione Enter para Sair ', () => {
            process.stdout.write(`\nVoltando ao Menu...`)
            setTimeout(() => {
                showMenu()
            }, 2000)
        })
    } else {
        process.stdout.write(`\nVoltando ao Menu...`)
        setTimeout(() => {
            showMenu()
        }, 2000)
    }
}


/* Opções */

async function execOptionOne() {
    const content = await askFor('Conteúdo:\n> ')
    let validOpt

    do {
        validOpt = true
        const shouldSave = await askFor('Salvar nota? (S/N): ')
        switch (shouldSave.trim().toLowerCase()) {
            case 's':
                const noteName = await askFor('Nome do Arquivo: ')
                await newNote(noteName, content)
                break
            case 'n':
                break
            default: 
                invalidOption()
                validOpt = false
        }
    } while (!validOpt)
    !process.argv[2]? backToMenu(): process.exit(0)
}

async function execOptionTwo() {
    const savedNotes = await getSavedNotes()
    process.stdout.write(`\n${savedNotes}`)
    !process.argv[2]? backToMenu(true): process.exit(0)
}

async function execOptionThree() {
    const res = await askForSavedNote()
    if (res === '') {
        !process.argv[2]? backToMenu(): process.exit(0)
    } else {
        const data = await readNote(path.resolve(`./notes/${res}.txt`))
        process.stdout.write(`\n- Conteúdo:\n ${data}\n\n`)
        !process.argv[2]? backToMenu(true): process.exit(0)
    } 
}

async function execOptionFour() {
    const res = await askForSavedNote()
    if (res === '') {
        !process.argv[2]? backToMenu(): process.exit(0)
    } else {
        await removeNote(path.resolve(`./notes/${res}.txt`))
        process.stdout.write(`\n${res} foi excluída com sucesso!\n\n`)
        setTimeout(() => {
            !process.argv[2]? backToMenu(true): process.exit(0)
        }, 300)  
    }  
}


function execOptionFive() {
    process.stdout.write('\nEncerrando aplicação..')
    setTimeout(() => process.exit(0), 2000)
    process.on('exit', () => {
        console.log('\nAté mais. ^_^')
    })
}

async function askForSavedNote() {
    let res = await askFor('Digite o nome da Nota Salva: ')
    while (!fs.existsSync(path.resolve(`./notes/${res}.txt`))) {
        res = await askFor('Não encontrada! Digite uma nota válida ou digite enter para Sair: ')
        if (res === '') return res  
    }

    return res
}

module.exports = {
    showMenu,
    execOptionOne,
    execOptionTwo,
    execOptionThree,
    execOptionFour,
    execOptionFive
}