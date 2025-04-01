const log = require('./monitor');

setInterval(() => {
    log.log()
    log.registerLog()
}, 1000)