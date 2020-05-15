const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/usuario", usuarioController.index);
router.post("/usuario", usuarioController.store);
router.get("/usuario/:id", usuarioController.findById);
router.post("/usuario/autenticar", usuarioController.findByIdeUsuarioSenha);
router.put("/usuario/:id", usuarioController.update);

module.exports = router;
