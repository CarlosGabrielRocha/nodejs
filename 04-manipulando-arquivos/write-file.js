const fs = require("node:fs") // Prefixo node: usado para ficar explícito que é um modulo nativo.

const content = 'Conteúdo do novo arquivo assíncrono.'

fs.writeFile('./arquivo.txt', content, 'utf-8', (error) => {
    if (error) {
        console.log('Erro ao escrever o Arquivo: ', error.message)
        return
    }

    console.log('Arquivo criado com sucesso de forma assíncrona!')
})

// Forma síncrona

/* try {
    fs.writeFileSync('./arquivo.txt', 'Olá mundo!', 'utf-8')
    console.log('Arquivo criado com sucesso!')
} catch (error) {
    console.log('Erro ao escrever o Arquivo', error.message)
} */