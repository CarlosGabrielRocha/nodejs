const fs = require("node:fs");

// const streamsLeitura = fs.createReadStream('arquivo.txt')
const streamsLeitura = fs.createReadStream('image.jpg')
const buffer = [] // Apenas pra conseguirmos ler, buffers não são necessariamente um array

streamsLeitura.on("data", (chunk) => {
    buffer.push(chunk)
    console.log('Um chunck foi processado.')
})

streamsLeitura.on("end", () => {
    console.log('Buffer:\n', buffer)
    //const dadosCompletos = Buffer.concat(buffer).toString() Concatena todos os buffers e transforma em string
    //console.log("Dados Lidos:\n", dadosCompletos)
})