import fs from "node:fs"

export default function showFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('./meuarquivo.tx', 'utf-8', (error, data) => {
            if (error) {
                /* console.log(`Não foi possível mostrar o arquivo! ${error.message}`) */
                reject(`Não foi possível mostrar o arquivo! ${error.message}`)
            } else {
                console.log(data)
                resolve()
            }
        })
    })
}


