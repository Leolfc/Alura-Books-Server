const fs = require("fs");
const dadosAtuais = JSON.parse(fs.readFileSync('./livros.json'))//le o arquivo
const novoDado = {"id":3, nome: "Livro Mais que demais" }
fs.writeFileSync("livros.json",JSON.stringify([...dadosAtuais, novoDado])) //escreve um arquivo
//JSONStringify transforma em string
console.log(JSON.parse(fs.readFileSync('./livros.json')))