import fs from "node:fs"

export default function deleteFile() {
    return new Promise((resolve, reject) => {
        fs.unlink('./meuarquivo.txt', (error) => {
            if (error) {
                console.log(`Não foi possível deletar o arquivo! ${error.message}`)
                reject()
            } else {
                resolve()
            }
        })
    })
}