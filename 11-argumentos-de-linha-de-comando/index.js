const args = process.argv // Devolve a lista de argumentos da linha de comando.

console.log(`Argumentos informados: ${args}`)  // output: Argumentos informados: C:\Program Files\nodejs\node.exe,C:\Users\carlo\OneDrive\Documentos\estudos-2025\nodejs\11-argumentos-de-
// linha-de-comando\index.js
console.log(args) // output: Array com os argumentos.



// input(Linha de comando): node index.js --name Gabriel --job developer
const namedArguments = {}

process.argv.slice(2).forEach((arg, index, array) => { // o slice irá cortar os 2 primeiros args
    if (arg.startsWith('--')) {
        const argName = arg.slice(2) // Corta os --
        const argValue = array[index + 1]
        namedArguments[argName] = argValue
    }
})

console.log('Argumentos informados:', namedArguments) // output: Argumentos informados: { name: 'Gabriel', job: 'developer' }