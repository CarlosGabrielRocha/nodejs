/* process.stdout.write("Olá, mundo!")
process.stdin.on("data", (data) => {
    process.stdout.write(`Você digitou ${data}`)
})  */

const readline = require("node:readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// rl.on // Listener normal.
// rl.once // Listener de uma única execução.

/* rl.on("line", (input) => { // Ativa quando uma nova linha de texto é adicionada pelo usuário.
    rl.write(`Você digitou ${input}`)
}) 
 */

/* rl.question('Qual é o seu nome? ', (answer) => { // Faz uma "pergunta" e executa o callback com a resposta
    rl.write(`Olá, ${answer}!\n`)
    rl.close() // Encerra a interface caso não tenha mais nada pendente.              
}) 

rl.once("close", () => {
    rl.write('saindo...') // O close de cima não irá funcionar pois como utilizamos novamente o write, a interface continuará pendente.
    process.exit(0) // Encerra o processo de forma definitiva independente se ainda existirem callbacks pendentes. Você também consegue passar códigos pra ele indicando se ele encerrou corretamente (0) ou se o processo encerrou porque algum problema ocorreu (1).
}) */
 
rl.on("SIGINT", () => { // Ativa quando a aplicação é encerrada pelo usuário (CRTL C)
    rl.question('Você realmente deseja sair? (s/n) ', (answer) => {
        if (answer.trim().toLowerCase() === 's') {  // O trim() limpa a string tirando espaços, entre outros.
            process.exit(0)
        } else {
            rl.write("Você escolheu continuar..")
        }
    })
})

