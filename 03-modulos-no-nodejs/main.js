const sum = require('./subtract.mjs')
//import subtract from './subtract.mjs'

console.log(subtract(6, 2))

/* Convenção adotada pela comunidade para diferenciar o uso dos módulos commonjs e ESM */

// O commonjs ainda é o valor mais amplamente suportado pelas bibliotecas.
// COMMONJS (padrão)
// .js (padrão) ou .cjs.

//ESM
// .js (padrão caso tenha trocado para type="module" no package.json e só esteja usando um tipo de módulo no projeto.) ou .mjs.