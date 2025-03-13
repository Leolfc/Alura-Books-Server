const { Router } = require("express");
const{getLivros} = require("../controladores/livro.js")
const router = Router();

router.get("/", getLivros);


router.post("/", (req, res) => {
  res.send("Você fez um requisição do tipo POST");
}); //CADASTRAR DADOS
router.patch("/", (req, res) => {
  res.send("Você fez um requisição do tipo PATCH!"); //EDITAR DADOS
});

router.delete("/", (req, res) => {
  res.send("Você fez um requisição do tipo DELETE");
}); //DELETAR DADOS

module.exports = router;
