import fs from "node:fs"

export default function updateFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./meuarquivo.txt', data, 'utf-8', (error) => {
            if (error) {
                console.log(`Não foi possível atualizar o arquivo! ${error.message}`)
                reject()
            } else {
                resolve()
            }
        })
    })
}


