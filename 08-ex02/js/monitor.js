const path = require("node:path");
const os = require("node:os");
const fs = require("node:fs");

let logString = ''

function registerLog() {
    const logDir = path.join('/', 'log')
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir)
    }

    fs.appendFileSync(path.resolve('/', '../log/log.txt'), `${logString}\n\n`, (err) => {
        if (err) {
            console.log(`Não foi possível adicionar o arquivo log: ${err.message}`)
        }
    })
}

function log() {
    const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60

    const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
    const uptimeHoursInSeconds = uptimeHours * 60 * 60

    const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
    const uptimeMinsInSeconds = uptimeMins * 60

    const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)

    const ramTotal = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2)
    const ramUsage = ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2)
    const ramUsagePercent = Math.round(ramUsage / ramTotal * 100)

    logString = `Sistema Operacional: ${os.platform()}
    Arquitetura do Sistema: ${os.arch()}
    Modelo do Processador: ${os.cpus()[0].model}
    Tempo de Atividade: ${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}
    Uso de memória RAM: ${ramUsage} GB / ${ramTotal} GB ${ramUsagePercent}%`
    console.clear()
    console.log(logString)
}

module.exports = {
    log,
    registerLog
}