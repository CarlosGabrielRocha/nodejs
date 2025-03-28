const path = require("node:path")

// o path é multiplataforma, então ele consegue lidar com caminhos corretos para várias plataformas que manipulam caminhos de forma diferente uma das outras, windows, mac, linux..

const dir = 'src'
const file = 'app.js'

const fullPath = path.join(__dirname, dir, file) 

/* O Join junta vários argumentos em transforma em um caminho. */
/* Não é comendado você digitar manualmente './src/scripts/arquivo.js pois cada plataforma pode lidar com caminhos de forma diferente. Utilize o join.' */

/* O __dirname é uma variável global que retorna o caminho absoluto até a pasta atual de determinado arquivo. */

/* O __filename é uma variável global que retorna o caminho absoluto até a pasta atual de deterinado arquivo e inclui o arquivo. */

//const relativePath = path.join(".", dir, file)
//console.log(relativePath)

/* O "."diferente  de quando usamoos o __dirname, será o diretório atual onde o comando node foi executado, então se voltarmos uma pasta você verá que não irá funcionar da mesma forma. */

console.log(fullPath) // output: C:\Users\carlo\OneDrive\Documentos\estudos-2025\nodejs\06-usando-o-path\src\app.js



const relativePath = '../arquivos/relatorio.pdf'

const absolutePath = path.resolve(relativePath)

/* O path.resolve() resolve determinado caminho e retorna o caminho completo */

console.log(absolutePath) // output: C:\Users\carlo\OneDrive\Documentos\estudos-2025\nodejs\arquivos\relatorio.pdf

const filename = path.basename(relativePath)
console.log(filename) // output: relatorio.pdf

/* O path.basename() retorna a última parte de um caminho. */

const ext = path.extname(absolutePath)
console.log(ext) // output: .pdf
/* O path.extname() retorna o nome da extensão de determinado caminho. */




