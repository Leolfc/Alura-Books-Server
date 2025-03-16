const { Router } = require("express");
const{getLivros, getLivro, postLivro, patchLivro} = require("../controladores/livro.js");
const { deletaLivroPorId } = require("../servicos/livro.js");
const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivro);


router.post("/",postLivro)//CADASTRAR DADOS


router.patch('/:id', patchLivro); //EDITAR DADOS


router.delete("/:id",deletaLivroPorId)

module.exports = router;
