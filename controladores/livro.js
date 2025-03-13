function getLivros(req, res){
    try {
      res.send("Você fez um requisição do tipo GET");
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  module.exports ={ //Aqui exportamos a funcao
    getLivros
  }