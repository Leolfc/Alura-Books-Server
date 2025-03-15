const { Router } = require("express");
const{getLivros, getLivro, postLivro} = require("../controladores/livro.js")
const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivro);


router.post("/",postLivro)//CADASTRAR DADOS


router.patch("/", (req, res) => {
  res.send("Você fez um requisição do tipo PATCH!"); //EDITAR DADOS
});


router.delete("/", (req, res) => {
  res.send("Você fez um requisição do tipo DELETE");
}); //DELETAR DADOS

module.exports = router;
