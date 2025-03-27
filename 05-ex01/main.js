import createFile from "./create-file.js";
import updateFile from "./update-file.js";
import showFile from "./show-file.js";
import deleteFile from "./delete-file.js";

async function execute() {
    try {
        await createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.")
        await showFile()
        await updateFile("Conteúdo modificado!")
        await showFile() 
        await deleteFile()     
    } catch (error) {
        console.log(error)
    }
}

execute()

/*  */

import { createFile, deleteFile, showFile, updateFile } from "./functions.mjs"

async function start() {
  await createFile("Conteúdo inicial do arquivo\nCriado com o módulo fs do Node.js")
  await showFile()
  console.log("--------------")
  await updateFile("Conteúdo modificado...")
  await showFile()
  console.log("--------------")
  await deleteFile()
}

start()



