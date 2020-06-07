const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const imovelController = require("../controllers/imovelController");

const authMiddleware = require("../middlewares/auth");

router.get("/usuario", usuarioController.index);
router.get("/imovel", imovelController.index);
router.post("/usuario", usuarioController.store);
router.post("/usuario/autenticar", usuarioController.findByIdeUsuarioSenha);

router.use(authMiddleware);

// Rotas do usuário
router.put("/usuario/:id", usuarioController.update);
router.get("/usuario/:id", usuarioController.findById);

// Rotas do imóvel
router.post("/imovel", imovelController.store);
router.get("/imovel/findPaginate", imovelController.findPage);
router.get("/imovel/all", imovelController.findAll);
router.put("/imovel/:id", imovelController.update);
router.get("/imovel/:id", imovelController.findById);
router.delete("/imovel/:id", imovelController.delete);
router.get("/imovel/find/:query", imovelController.findByDescription);

module.exports = router;
