import fs from "node:fs"

export default function createFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./meuarquivo.txt', data, 'utf-8', (error) => {
            if (error) {
                console.log(`Não foi possível criar o arquivo! ${error.message}`)
            } else {
                resolve()
            }
        })
    })
}

