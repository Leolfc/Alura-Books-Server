const fs = require("fs");
const { getTodosLivros } = require("../servicos/livro");
function getLivros(req, res) {
  try {
    const livros = getTodosLivros();//Aqui chamamos a funcao
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  //Aqui exportamos a funcao
  getLivros,
};
