const os = require("node:os")

const plataforma = os.platform()
console.log(`Plataforma do SO: ${plataforma}`)

const arquitetura = os.arch()
console.log(`Arquitetura do SO: ${arquitetura}`)

const processadores = os.cpus()
console.log(`Processadores da CPU`, processadores[0])

const memoria = os.freemem()
console.log(`Total de memória do PC: ${memoria / 1024 / 1024}`)


