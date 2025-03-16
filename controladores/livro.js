const fs = require("fs");
const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
} = require("../servicos/livro");
function getLivros(req, res) {
  try {
    const livro = getTodosLivros(); //Aqui chamamos a funcao
    res.send(livro);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
function getLivro(req, res) {
  try {
    const id = req.params.id;
    const livro = getLivroPorId(id); //Aqui chamamos a funcao
    res.send(livro);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);
    res.status(201);
    res.send("Livro inserido com sucesso!!!");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
function patchLivro(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;
    modificaLivro(body, id);
    res.send("Livro modificado com sucesso!!");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deletaLivro(req, res){
try{
const id = req.params.id;
deletaLivro(id)
res.send('Livro deletado com sucesso!!!')
}catch(error){
  res.status(500);
  res.send(error.message);
}
}

module.exports = {
  //Aqui exportamos a funcao
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deletaLivro,
};
